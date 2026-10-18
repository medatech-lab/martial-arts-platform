
"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sendEmail } from "@/lib/mail";

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

    const training = await prisma.training.findUnique({
        where: { id: trainingId },
        select: {
            sport: true,
            date: true,
            startTime: true,
            location: true,
            startsAt: true,
        },
    });

    if (!training) {
        throw new Error("Training wurde nicht gefunden.");
    }

    if (!training.startsAt) {
        throw new Error(
            "Für dieses Training fehlt der Startzeitpunkt. Bitte den Administrator kontaktieren."
        );
    }

    if (training.startsAt.getTime() <= Date.now()) {
        throw new Error(
            "Dieses Training hat bereits begonnen und kann nicht mehr gebucht werden."
        );
    }

    // Buchbarkeit, Startzeit und freie Plätze werden direkt
    // anhand der aktuellen Trainingsdaten in EINER SQLite-Anweisung geprüft.
    const inserted = await prisma.$executeRaw`
        INSERT INTO "Booking" (
            "firstName",
            "lastName",
            "email",
            "phone",
            "trainingId"
        )
        SELECT
            ${firstName},
            ${lastName},
            ${email},
            ${phone || null},
            t."id"
        FROM "Training" AS t
        WHERE t."id" = ${trainingId}
          AND t."bookable" = 1
          AND t."startsAt" IS NOT NULL
          AND unixepoch(t."startsAt") > unixepoch('now')
          AND (
              SELECT COUNT(*)
              FROM "Booking" AS b
              WHERE b."trainingId" = t."id"
          ) < t."capacity"
    `;

    if (inserted !== 1) {
        const currentTraining = await prisma.training.findUnique({
            where: { id: trainingId },
            include: {
                _count: {
                    select: { bookings: true },
                },
            },
        });

        if (!currentTraining) {
            throw new Error("Training wurde nicht gefunden.");
        }

        if (!currentTraining.bookable) {
            throw new Error("Dieses Training ist nicht buchbar.");
        }

        if (!currentTraining.startsAt) {
            throw new Error(
                "Für dieses Training fehlt der Startzeitpunkt. Bitte den Administrator kontaktieren."
            );
        }

        if (currentTraining.startsAt.getTime() <= Date.now()) {
            throw new Error(
                "Dieses Training hat bereits begonnen und kann nicht mehr gebucht werden."
            );
        }

        if (currentTraining._count.bookings >= currentTraining.capacity) {
            throw new Error("Dieses Training ist ausgebucht.");
        }

        throw new Error(
            "Die Buchung konnte nicht gespeichert werden. Bitte erneut versuchen."
        );
    }

    // Bestätigung erst nach erfolgreicher Buchung verschicken.
    try {
        const date = training.date.toLocaleDateString("de-CH", {
            timeZone: "UTC",
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });

        await sendEmail(
            email,
            "Buchungsbestätigung – Saints Workouts",
            `Hallo ${firstName}!

Vielen Dank für deine Buchung bei Saints Workouts.

Deine Buchung wurde erfolgreich bestätigt.

Training: ${training.sport}
Datum: ${date}
Uhrzeit: ${training.startTime}
Ort: ${training.location}

Wir freuen uns auf dich!

Sportliche Grüsse
Dein Saints Workouts Team`
        );
    } catch (error) {
        // Eine fehlgeschlagene E-Mail darf die Buchung nicht rückgängig machen.
        console.error(
            "Buchung gespeichert, E-Mail-Versand fehlgeschlagen:",
            error
        );
    }

    revalidatePath("/trainingsplan");
    revalidatePath(`/buchen/${trainingId}`);

    redirect(`/buchen/${trainingId}/bestaetigung`);
}
