import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { createBooking } from "./actions";

type BookingPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function BookingPage({
    params,
}: BookingPageProps) {
    const { id } = await params;

    const training = await prisma.training.findUnique({
        where: {
            id: Number(id),
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
        notFound();
    }

    const freePlaces =
        training.capacity - training._count.bookings;

    const createBookingForTraining =
        createBooking.bind(null, training.id);

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <section className="px-6 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
                <div className="mx-auto w-full max-w-2xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                        Saints Workouts
                    </p>

                    <h1 className="mt-4 text-3xl font-bold uppercase sm:text-4xl lg:text-5xl">
                        Platz buchen
                    </h1>

                    <div className="mt-8 border-t border-white/15 pt-6">
                        <h2 className="text-xl font-bold uppercase sm:text-2xl">
                            {training.sport}
                        </h2>

                        <div className="mt-3 space-y-1 text-sm text-neutral-300 sm:text-base">
                            <p>
                                {training.date.toLocaleDateString("de-CH", {
                                    weekday: "long",
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}
                            </p>

                            <p>
                                {training.startTime} – {training.endTime}
                            </p>

                            {training.trainer && (
                                <p>Trainer: {training.trainer}</p>
                            )}

                            {training.location && (
                                <p>Ort: {training.location}</p>
                            )}
                        </div>

                        <p className="mt-4 text-sm font-semibold">
                            {freePlaces} {freePlaces === 1 ? "Platz frei" : "Plätze frei"}
                        </p>
                    </div>

                    {!training.bookable ? (
                        <div className="mt-10 rounded-md border border-white/15 p-6">
                            <h2 className="text-xl font-bold">
                                Dieses Training ist derzeit nicht buchbar.
                            </h2>

                            <p className="mt-2 text-neutral-400">
                                Bitte wähle ein anderes Training im Trainingsplan.
                            </p>
                        </div>
                    ) : freePlaces <= 0 ? (
                        <div className="mt-10 rounded-md border border-white/15 p-6">
                            <h2 className="text-xl font-bold">
                                Dieses Training ist ausgebucht.
                            </h2>

                            <p className="mt-2 text-neutral-400">
                             Aktuell sind keine freien Plätze mehr verfügbar.
                            </p>
                        </div>
                    ) : (
                    <form
                        action={createBookingForTraining}
                        className="mt-8 grid gap-5 border-t border-white/15 pt-8"
                    >
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm text-neutral-300">
                                    Vorname
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm text-neutral-300">
                                 Nachname
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-neutral-300">
                                E-Mail
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                         />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-neutral-300">
                             Telefon
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                className="w-full rounded-md border border-white/20 bg-neutral-900 px-4 py-3"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-md bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-neutral-300"
                        >
                         Verbindlich buchen
                        </button>
                    </form>
                )}

                </div>
            </section>
        </main>
    );
}