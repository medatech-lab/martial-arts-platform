"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { revalidatePath } from "next/cache";

export async function createTraining(formData: FormData) {
    await requireAdmin();

    const sport = formData.get("sport") as string;
    const date = formData.get("date") as string;
    const startTime = formData.get("startTime") as string;
    const endTime = formData.get("endTime") as string;
    const trainer = formData.get("trainer") as string;
    const location = formData.get("location") as string;
    const capacity = Number(formData.get("capacity"));
    const bookable = formData.get("bookable") === "on";

    if (!sport || !date || !startTime || !endTime || capacity < 1) {
        throw new Error("Bitte alle Pflichtfelder ausfüllen.");
    }

    await prisma.training.create({
        data: {
            sport,
            date: new Date(`${date}T00:00:00`),
            startTime,
            endTime,
            trainer: trainer || null,
            location: location || null,
            capacity,
            bookable,
        },
    });

    revalidatePath("/trainingsplan");
    revalidatePath("/admin/trainings");
}

export async function deleteTraining(formData: FormData) {
    await requireAdmin();

    const id = Number(formData.get("id"));

    if (!id) {
        throw new Error("Ungültige Training-ID.");
    }

    await prisma.training.delete({
        where: {
            id,
        },
    });

    revalidatePath("/trainingsplan");
    revalidatePath("/admin/trainings");
}

export async function toggleTrainingBookable(formData: FormData) {
    await requireAdmin();

    const id = Number(formData.get("id"));
    const bookable = formData.get("bookable") === "true";

    if (!id) {
        throw new Error("Ungültige Training-ID.");
    }

    await prisma.training.update({
        where: {
            id,
        },
        data: {
            bookable: !bookable,
        },
    });

    revalidatePath("/trainingsplan");
    revalidatePath("/admin/trainings");
    revalidatePath(`/buchen/${id}`);
}