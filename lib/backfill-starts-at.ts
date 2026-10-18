
import "dotenv/config";

import { prisma } from "./prisma";
import { getExactTrainingStart } from "./training-time";

async function main() {
  const before = await prisma.training.findMany({
    orderBy: { id: "asc" },
    select: {
      id: true,
      date: true,
      startTime: true,
      startsAt: true,
    },
  });

  const bookingsBefore = await prisma.booking.count();

  console.log("Trainings vor dem Backfill:", before.length);
  console.log("Buchungen vor dem Backfill:", bookingsBefore);

  const pending = before.filter(
    (training) => training.startsAt === null
  );

  const updates = pending.map((training) => ({
    id: training.id,
    startsAt: getExactTrainingStart(training),
  }));

  console.table(
    updates.map((training) => ({
      id: training.id,
      startsAtUTC: training.startsAt.toISOString(),
    }))
  );

  if (updates.length === 0) {
    console.log("Keine Trainings zum Aktualisieren.");
    return;
  }

  await prisma.$transaction(async (tx) => {
    for (const training of updates) {
      const result = await tx.training.updateMany({
        where: {
          id: training.id,
          startsAt: null,
        },
        data: {
          startsAt: training.startsAt,
        },
      });

      if (result.count !== 1) {
        throw new Error(
          `Training ${training.id} konnte nicht eindeutig aktualisiert werden.`
        );
      }
    }
  });

  const after = await prisma.training.findMany({
    orderBy: { id: "asc" },
    select: {
      id: true,
      startsAt: true,
    },
  });

  const bookingsAfter = await prisma.booking.count();

  console.table(
    after.map((training) => ({
      id: training.id,
      startsAtUTC: training.startsAt?.toISOString() ?? "NULL",
    }))
  );

  if (bookingsBefore !== bookingsAfter) {
    throw new Error(
      "ACHTUNG: Die Anzahl der Buchungen hat sich verändert!"
    );
  }

  for (const update of updates) {
    const saved = after.find(
      (training) => training.id === update.id
    );

    if (
      saved?.startsAt?.getTime() !== update.startsAt.getTime()
    ) {
      throw new Error(
        `Gespeicherter Zeitwert für Training ${update.id} stimmt nicht.`
      );
    }
  }

  console.log("BACKFILL: OK");
  console.log(`Aktualisierte Trainings: ${updates.length}`);
  console.log(`Buchungen unverändert: ${bookingsAfter}`);
}

main()
  .catch((error) => {
    console.error("BACKFILL FEHLGESCHLAGEN:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
