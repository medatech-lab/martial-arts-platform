"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createBooking(trainingId: number, formData: FormData) {
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    if (!firstName || !lastName || !email) {
        throw new Error("Bitte alle Pflichtfelder ausfüllen.");
    }

    if (!Number.isSafeInteger(trainingId) || trainingId <= 0) {
        throw new Error("Ungültiges Training.");
    }

    // Platzprüfung und Buchung erfolgen gemeinsam in EINER SQLite-Anweisung.
    // SQLite serialisiert Schreibvorgänge; eine zweite gleichzeitige Buchung
    // kann denselben letzten Platz nicht nochmals erfolgreich reservieren.
    const inserted = await prisma.$executeRaw`
        INSERT INTO "Booking" ("firstName", "lastName", "email", "phone", "trainingId")
        SELECT ${firstName}, ${lastName}, ${email}, ${phone || null}, t."id"
        FROM "Training" AS t
        WHERE t."id" = ${trainingId}
          AND t."bookable" = 1
          AND (
              SELECT COUNT(*)
              FROM "Booking" AS b
              WHERE b."trainingId" = t."id"
          ) < t."capacity"
    `;

    if (inserted !== 1) {
        // Nur für eine verständliche Fehlermeldung; die Sicherheitsprüfung
        // erfolgte bereits atomar in der SQL-Anweisung oben.
        const training = await prisma.training.findUnique({
            where: { id: trainingId },
            include: { _count: { select: { bookings: true } } },
        });

        if (!training) throw new Error("Training wurde nicht gefunden.");
        if (!training.bookable) throw new Error("Dieses Training ist nicht buchbar.");
        if (training._count.bookings >= training.capacity) {
            throw new Error("Dieses Training ist ausgebucht.");
        }
        throw new Error("Die Buchung konnte nicht gespeichert werden. Bitte erneut versuchen.");
    }

    revalidatePath("/trainingsplan");
    revalidatePath(`/buchen/${trainingId}`);
    redirect(`/buchen/${trainingId}/bestaetigung`);
}
