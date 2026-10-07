"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createBooking(
    trainingId: number,
    formData: FormData
) {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    if (!firstName || !lastName || !email) {
        throw new Error("Bitte alle Pflichtfelder ausfüllen.");
    }

    const training = await prisma.training.findUnique({
        where: {
            id: trainingId,
        },
        include: {
            _count: {
                select: {
                    bookings: true,
                },
            },
        },
    });

    if (!training) {
        throw new Error("Training wurde nicht gefunden.");
    }

    if (!training.bookable) {
        throw new Error("Dieses Training ist nicht buchbar.");
    }

    if (training._count.bookings >= training.capacity) {
        throw new Error("Dieses Training ist ausgebucht.");
    }

    await prisma.booking.create({
        data: {
            firstName,
            lastName,
            email,
            phone: phone || null,
            trainingId,
        },
    });

    revalidatePath("/trainingsplan");
    revalidatePath(`/buchen/${trainingId}`);
    redirect(`/buchen/${trainingId}/bestaetigung`);

    redirect(`/buchen/${trainingId}/bestaetigung`);
}