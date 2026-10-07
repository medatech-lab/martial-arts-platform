import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type ConfirmationPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ConfirmationPage({
    params,
}: ConfirmationPageProps) {
    const { id } = await params;

    const training = await prisma.training.findUnique({
        where: {
            id: Number(id),
        },
    });

    if (!training) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]">
                <div className="mx-auto max-w-2xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                        Saints Workouts
                    </p>

                    <h1 className="mt-4 text-[clamp(2.5rem,6vw,4rem)] font-bold uppercase leading-none">
                        Buchung bestätigt
                    </h1>

                    <p className="mt-6 text-lg text-neutral-300">
                        Dein Platz wurde erfolgreich reserviert.
                    </p>

                    <div className="mt-10 border-y border-white/15 py-6">
                        <h2 className="text-2xl font-bold uppercase">
                            {training.sport}
                        </h2>

                        <p className="mt-3 text-neutral-300">
                            {training.date.toLocaleDateString("de-CH", {
                                weekday: "long",
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                        </p>

                        <p className="mt-1 text-neutral-400">
                            {training.startTime} – {training.endTime}
                        </p>

                        {training.trainer && (
                            <p className="mt-1 text-neutral-400">
                                Trainer: {training.trainer}
                            </p>
                        )}
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/trainingsplan"
                            className="rounded-md bg-white px-5 py-3 text-center font-semibold text-black transition-colors hover:bg-neutral-300"
                        >
                            Zum Trainingsplan
                        </Link>

                        <Link
                            href="/"
                            className="rounded-md border border-white/20 px-5 py-3 text-center font-semibold transition-colors hover:bg-white/10"
                        >
                            Zur Startseite
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    );
}