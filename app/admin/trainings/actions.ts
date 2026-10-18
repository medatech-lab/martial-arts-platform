
"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/admin-auth";
import { revalidatePath } from "next/cache";
import {
    createTrainingDate,
    getExactTrainingStart,
} from "@/lib/training-time";

export async function createTraining(formData: FormData) {
    await requireAdmin();

    const sport = String(formData.get("sport") ?? "").trim();
    const date = String(formData.get("date") ?? "").trim();
    const startTime = String(formData.get("startTime") ?? "").trim();
    const endTime = String(formData.get("endTime") ?? "").trim();
    const trainer = String(formData.get("trainer") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const capacity = Number(formData.get("capacity"));
    const bookable = formData.get("bookable") === "on";

    if (
        !sport ||
        !date ||
        !startTime ||
        !endTime ||
        !Number.isSafeInteger(capacity) ||
        capacity < 1
    ) {
        throw new Error("Bitte alle Pflichtfelder ausfüllen.");
    }

    const trainingDate = createTrainingDate(date);

    const startsAt = getExactTrainingStart({
        date: trainingDate,
        startTime,
    });

    await prisma.training.create({
        data: {
            sport,
            date: trainingDate,
            startTime,
            startsAt,
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

    if (!Number.isSafeInteger(id) || id <= 0) {
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

    if (!Number.isSafeInteger(id) || id <= 0) {
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
