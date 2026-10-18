
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Trainingsplan() {
    const trainings = await prisma.training.findMany({
        where: {
            startsAt: {
                gt: new Date(),
            },
        },
        orderBy: {
            startsAt: "asc",
        },
        include: {
            _count: {
                select: {
                    bookings: true,
                },
            },
        },
    });

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                        Saints Workouts
                    </p>

                    <h1 className="mt-4 text-[clamp(1.9rem,8vw,5rem)] font-bold uppercase leading-none">
                        Trainingsplan
                    </h1>

                    <p className="mt-6 max-w-2xl text-neutral-300">
                        Finde dein nächstes Training und sichere dir deinen Platz.
                    </p>

                    <div className="mt-12 grid gap-4">
                        {trainings.length === 0 ? (
                            <p className="text-neutral-400">
                                Aktuell sind keine Trainings geplant.
                            </p>
                        ) : (
                            trainings.map((training) => {
                                const freePlaces = Math.max(
                                    0,
                                    training.capacity - training._count.bookings
                                );

                                const isFull = freePlaces === 0;
                                const canBook = training.bookable && !isFull;

                                const date = new Intl.DateTimeFormat("de-CH", {
                                    timeZone: "Europe/Zurich",
                                    weekday: "long",
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                }).format(training.startsAt!);

                                return (
                                    <article
                                        key={training.id}
                                        className="rounded-2xl border border-white/10 bg-neutral-900 p-5 sm:p-7"
                                    >
                                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                            <div className="min-w-0">
                                                <p className="text-sm font-medium capitalize text-neutral-400">
                                                    {date}
                                                </p>

                                                <h2 className="mt-2 text-xl font-bold sm:text-2xl">
                                                    {training.sport}
                                                </h2>

                                                <p className="mt-2 text-sm text-neutral-400">
                                                    {training.startTime} – {training.endTime}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                                <div className="text-sm">
                                                    {isFull ? (
                                                        <span className="text-neutral-400">
                                                            Ausgebucht
                                                        </span>
                                                    ) : (
                                                        <span className="text-neutral-300">
                                                            {freePlaces}{" "}
                                                            {freePlaces === 1
                                                                ? "Platz frei"
                                                                : "Plätze frei"}
                                                        </span>
                                                    )}
                                                </div>

                                                {canBook ? (
                                                    <Link
                                                        href={`/buchen/${training.id}`}
                                                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
                                                    >
                                                        Platz buchen
                                                    </Link>
                                                ) : (
                                                    <span className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-neutral-500">
                                                        Nicht buchbar
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                );
                            })
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
