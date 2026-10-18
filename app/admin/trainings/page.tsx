
import { prisma } from "@/lib/prisma";

import {
    createTraining,
    deleteTraining,
    toggleTrainingBookable,
} from "./actions";

import { logoutAdmin } from "@/app/admin/login/actions";

export const dynamic = "force-dynamic";

export default async function AdminTrainingsPage() {
    const trainings = await prisma.training.findMany({
        orderBy: {
            date: "asc",
        },
        include: {
            bookings: {
                orderBy: {
                    createdAt: "asc",
                },
            },
        },
    });

    const now = new Date();

    const upcomingTrainings = trainings
        .filter(
            (training) =>
                training.startsAt !== null &&
                training.startsAt.getTime() > now.getTime()
        )
        .sort(
            (a, b) =>
                a.startsAt!.getTime() - b.startsAt!.getTime()
        );

    const pastTrainings = trainings
        .filter(
            (training) =>
                training.startsAt === null ||
                training.startsAt.getTime() <= now.getTime()
        )
        .sort(
            (a, b) =>
                (b.startsAt?.getTime() ?? b.date.getTime()) -
                (a.startsAt?.getTime() ?? a.date.getTime())
        );

    function renderTrainings(
        list: typeof trainings,
        emptyMessage: string
    ) {
        if (list.length === 0) {
            return (
                <p className="mt-6 text-neutral-400">
                    {emptyMessage}
                </p>
            );
        }

        return (
            <div className="mt-8 space-y-10">
                {list.map((training) => (
                    <article
                        key={training.id}
                        className="rounded-xl border border-white/15 bg-neutral-900/40 p-6 sm:p-8"
                    >
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-xl font-bold uppercase">
                                    {training.sport}
                                </h3>

                                <p className="mt-3 text-neutral-300">
                                    {training.date.toLocaleDateString(
                                        "de-CH",
                                        {
                                            timeZone: "UTC",
                                            weekday: "long",
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                        }
                                    )}
                                </p>

                                <p className="mt-1 text-neutral-400">
                                    {training.startTime} –{" "}
                                    {training.endTime}
                                </p>

                                {training.location && (
                                    <p className="mt-2 text-sm text-neutral-400">
                                        Ort: {training.location}
                                    </p>
                                )}

                                {training.trainer && (
                                    <p className="mt-1 text-sm text-neutral-400">
                                        Trainer: {training.trainer}
                                    </p>
                                )}

                                <p className="mt-3 text-sm font-semibold">
                                    {training.bookings.length} /{" "}
                                    {training.capacity} Teilnehmer
                                </p>

                                <p className="mt-1 text-sm text-neutral-300">
                                    {training.bookable
                                        ? "Buchbar"
                                        : "Nicht buchbar"}
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:items-end">
                                <form action={toggleTrainingBookable}>
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={training.id}
                                    />

                                    <input
                                        type="hidden"
                                        name="bookable"
                                        value={String(training.bookable)}
                                    />

                                    <button
                                        type="submit"
                                        className="inline-flex 
                                                w-40 
                                                min-h-10 
                                                items-center 
                                                justify-center 
                                                rounded-md 
                                                border 
                                                border-white/20 
                                                px-4 
                                                py-2 
                                                text-center 
                                                text-sm 
                                                transition-colors 
                                                hover:bg-white/10"
                                            >

                                        {training.bookable
                                            ? "Buchung sperren"
                                            : "Buchung freigeben"}
                                    </button>
                                </form>

                                <form action={deleteTraining}>
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={training.id}
                                    />

                                    <button
                                        type="submit"
                                        className="inline-flex 
                                        w-40 
                                        min-h-10 
                                        items-center 
                                        justify-center 
                                        rounded-md border 
                                        border-white/20 
                                        px-4 
                                        py-2 
                                        text-center 
                                        text-sm 
                                        transition-colors 
                                        hover:border-red-400/50 
                                        hover:bg-red-500/10 
                                        hover:text-red-300"
                                    >
                                        Löschen
                                    </button>
                                </form>
                            </div>
                        </div>

                        {training.bookings.length > 0 && (
                            <div className="mt-8 border-t border-white/10 pt-7">
                                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                    Teilnehmer
                                </h4>

                                <div className="mt-5 grid gap-4">
                                    {training.bookings.map((booking) => (
                                        <div
                                            key={booking.id}
                                            className="rounded-lg border border-white/5 bg-white/5 px-5 py-4"
                                        >
                                            <p className="font-semibold">
                                                {booking.firstName}{" "}
                                                {booking.lastName}
                                            </p>

                                            <p className="mt-1 text-sm text-neutral-400">
                                                {booking.email}
                                            </p>

                                            {booking.phone && (
                                                <p className="mt-1 text-sm text-neutral-400">
                                                    {booking.phone}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
            <div className="mx-auto max-w-3xl">

                {/* Kopfbereich */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                            Saints Workouts
                        </p>

                        <h1 className="mt-4 text-4xl font-bold">
                            Trainings verwalten
                        </h1>
                    </div>

                    <form action={logoutAdmin}>
                        <button
                            type="submit"
                            className="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-neutral-300 transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
                        >
                            Abmelden
                        </button>
                    </form>
                </div>

                {/* Neues Training erstellen */}
                <form
                    action={createTraining}
                    className="mt-10 grid gap-6"
                >
                    <div>
                        <label className="mb-2 block text-sm text-neutral-300">
                            Sportart
                        </label>

                        <select
                            name="sport"
                            required
                            className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                        >
                            <option value="Jiu-Jitsu">
                                Jiu-Jitsu
                            </option>
                            <option value="Kickboxen">
                                Kickboxen
                            </option>
                            <option value="Kids-Workout">
                                Kids-Workout
                            </option>
                            <option value="Personal Training">
                                Personal Training
                            </option>
                            <option value="Karate">
                                Karate
                            </option>
                            <option value="Judo">
                                Judo
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-300">
                            Datum
                        </label>

                        <input
                            type="date"
                            name="date"
                            required
                            className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                        />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm text-neutral-300">
                                Beginn
                            </label>

                            <input
                                type="time"
                                name="startTime"
                                required
                                className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-neutral-300">
                                Ende
                            </label>

                            <input
                                type="time"
                                name="endTime"
                                required
                                className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-300">
                            Trainingsort / Adresse
                        </label>

                        <input
                            type="text"
                            name="location"
                            placeholder="z. B. Sporthalle, Musterstrasse 10, St. Gallen"
                            className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-300">
                            Trainer
                        </label>

                        <input
                            type="text"
                            name="trainer"
                            placeholder="Trainer-Name"
                            className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-300">
                            Maximale Teilnehmer
                        </label>

                        <input
                            type="number"
                            name="capacity"
                            min="1"
                            required
                            className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                        />
                    </div>

                    <label className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            name="bookable"
                            defaultChecked
                        />
                        <span>Training buchbar</span>
                    </label>

                    <button
                        type="submit"
                        className="rounded-md bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-neutral-300"
                    >
                        Training erstellen
                    </button>
                </form>

                {/* Bevorstehende Trainings */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold">
                        Bevorstehende Trainings
                    </h2>

                    {renderTrainings(
                        upcomingTrainings,
                        "Aktuell sind keine bevorstehenden Trainings vorhanden."
                    )}
                </section>

                {/* Zurückliegende Trainings */}
                <section className="mt-20 border-t border-white/15 pt-12">
                    <h2 className="text-2xl font-bold">
                        Zurückliegende Trainings
                    </h2>

                    {renderTrainings(
                        pastTrainings,
                        "Keine zurückliegenden Trainings vorhanden."
                    )}
                </section>

            </div>
        </main>
    );
}
