import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Trainingsplan() {
    const trainings = await prisma.training.findMany({
        orderBy: {
            date: "asc",
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
                                const freePlaces =
                                    training.capacity - training._count.bookings;

                                const canBook =
                                    training.bookable && freePlaces > 0;

                                return (
                                    <div
                                        key={training.id}
                                        className="
                                            grid
                                            gap-5
                                            border-t
                                            border-white/15
                                            py-7

                                            md:grid-cols-4
                                            md:gap-x-6
                                            md:items-start

                                            lg:gap-x-10
                                        "
                                    >
                                        {/* Datum + Zeit */}
                                        <div className="min-w-0">
                                            <h2
                                                className="
                                                    font-semibold
                                                    md:text-base
                                                    md:font-bold
                                                    md:uppercase
                                                    lg:text-lg
                                                "
                                            >
                                                {training.date.toLocaleDateString(
                                                    "de-CH",
                                                    {
                                                        weekday: "long",
                                                        day: "2-digit",
                                                        month: "2-digit",
                                                        year: "numeric",
                                                    }
                                                )}
                                            </h2>

                                            <p className="mt-1 text-sm text-neutral-400">
                                                {training.startTime} –{" "}
                                                {training.endTime}
                                            </p>
                                        </div>

                                        {/* Sport + Trainer */}
                                        <div className="min-w-0">
                                            <h2
                                                className="
                                                    text-xl
                                                    font-bold
                                                    uppercase
                                                    md:text-base
                                                    lg:text-xl
                                                "
                                            >
                                                {training.sport}
                                            </h2>

                                            {training.trainer && (
                                                <p className="mt-1 text-sm text-neutral-400">
                                                    Trainer: {training.trainer}
                                                </p>
                                            )}
                                        </div>

                                        {/* Ort */}
                                        <div className="min-w-0">
                                            <h2
                                                className="
                                                    text-xl
                                                    font-bold
                                                    uppercase
                                                    md:text-base
                                                    lg:text-xl
                                                "
                                            >
                                                Ort
                                            </h2>

                                            {training.location ? (
                                                <p className="mt-1 wrap-break-words text-sm text-neutral-400">
                                                    {training.location}
                                                </p>
                                            ) : (
                                                <p className="mt-1 text-sm text-neutral-600">
                                                    –
                                                </p>
                                            )}
                                        </div>

                                        {/* Buchung */}
                                        <div className="flex min-w-0 flex-col items-center">
                                            <h2
                                                className="
                                                    text-xl
                                                    font-bold
                                                    uppercase
                                                    md:text-base
                                                    lg:text-xl
                                                "
                                            >
                                                Buchung
                                            </h2>

                                            {canBook ? (
                                                <div className="mt-2 flex flex-col items-center">
                                                    <Link
                                                        href={`/buchen/${training.id}`}
                                                        className="
                                                            whitespace-nowrap
                                                            rounded-md
                                                            bg-white
                                                            px-4
                                                            py-2
                                                            text-sm
                                                            font-semibold
                                                            text-black
                                                            transition-colors
                                                            hover:bg-neutral-300
                                                        "
                                                    >
                                                        Platz buchen
                                                    </Link>

                                                    <p className="mt-2 whitespace-nowrap text-center text-xs text-neutral-400">
                                                        {freePlaces}{" "}
                                                        {freePlaces === 1
                                                            ? "Platz frei"
                                                            : "Plätze frei"}
                                                    </p>
                                                </div>
                                            ) : (
                                                <p className="mt-2 whitespace-nowrap text-center text-sm text-neutral-500">
                                                    {freePlaces <= 0
                                                        ? "Ausgebucht"
                                                        : "Nicht buchbar"}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>

                </div>
            </section>
        </main>
    );
}