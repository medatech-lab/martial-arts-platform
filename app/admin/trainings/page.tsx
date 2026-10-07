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
                            Trainer
                        </label>

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

                        <input
                            type="text"
                            name="trainer"
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


                {/* Bestehende Trainings */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold">
                        Bestehende Trainings
                    </h2>

                    {trainings.length === 0 ? (
                        <p className="mt-6 text-neutral-400">
                            Noch keine Trainings vorhanden.
                        </p>
                    ) : (
                        <div className="mt-6">
                            {trainings.map((training) => (
                                <div
                                    key={training.id}
                                    className="border-t border-white/15 py-6"
                                >
                                    {/* Trainingsinformationen */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                                        <div>
                                            <h3 className="text-xl font-bold uppercase">
                                                {training.sport}
                                            </h3>

                                            <p className="mt-2 text-neutral-300">
                                                {training.date.toLocaleDateString(
                                                    "de-CH",
                                                    {
                                                        weekday: "long",
                                                        day: "2-digit",
                                                        month: "2-digit",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </p>

                                            <p className="text-neutral-400">
                                                {training.startTime} –{" "}
                                                {training.endTime}
                                            </p>

                                            {training.trainer && (
                                                <p className="mt-1 text-sm text-neutral-400">
                                                    Trainer:{" "}
                                                    {training.trainer}
                                                </p>
                                            )}

                                            <p className="mt-1 text-sm font-semibold">
                                                {training.bookings.length} /{" "}
                                                {training.capacity} Teilnehmer
                                            </p>

                                            <p className="mt-1 text-sm">
                                                {training.bookable
                                                    ? "Buchbar"
                                                    : "Nicht buchbar"}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-2 sm:items-end">

                                            {/* Buchung sperren / freigeben */}
                                            <form
                                                action={
                                                    toggleTrainingBookable
                                                }
                                            >
                                                <input
                                                    type="hidden"
                                                    name="id"
                                                    value={training.id}
                                                />

                                                <input
                                                    type="hidden"
                                                    name="bookable"
                                                    value={String(
                                                        training.bookable
                                                    )}
                                                />

                                                <button
                                                    type="submit"
                                                    className="rounded-md border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white/10"
                                                >
                                                    {training.bookable
                                                        ? "Buchung sperren"
                                                        : "Buchung freigeben"}
                                                </button>
                                            </form>

                                            {/* Training löschen */}
                                            <form action={deleteTraining}>
                                                <input
                                                    type="hidden"
                                                    name="id"
                                                    value={training.id}
                                                />

                                                <button
                                                    type="submit"
                                                    className="rounded-md border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white/10"
                                                >
                                                    Löschen
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    {/* Teilnehmerliste */}
                                    {training.bookings.length > 0 && (
                                        <div className="mt-6 border-t border-white/10 pt-6">
                                            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                                Teilnehmer
                                            </h4>

                                            <div className="mt-4 grid gap-3">
                                                {training.bookings.map(
                                                    (booking) => (
                                                        <div
                                                            key={booking.id}
                                                            className="rounded-md bg-white/5 px-4 py-3"
                                                        >
                                                            <p className="font-semibold">
                                                                {
                                                                    booking.firstName
                                                                }{" "}
                                                                {
                                                                    booking.lastName
                                                                }
                                                            </p>

                                                            <p className="mt-1 text-sm text-neutral-400">
                                                                {booking.email}
                                                            </p>

                                                            {booking.phone && (
                                                                <p className="text-sm text-neutral-400">
                                                                    {
                                                                        booking.phone
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </section>

            </div>
        </main>
    );
}