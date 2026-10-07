import Image from "next/image";
import Link from "next/link";

export default function JudoPage() {
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(3rem,8vw,7rem)]">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                            Saints Workouts
                        </p>

                        <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-bold uppercase leading-none">
                            Judo
                        </h1>

                        <p className="mt-6 max-w-xl text-neutral-300">
                            Würfe, Kontrolle und Technik – vielseitiges Training für Kraft,
                            Koordination und Körpergefühl.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/probetraining"
                                className="rounded-md bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-neutral-300"
                            >
                                Probetraining
                            </Link>

                            <Link
                                href="/trainingsplan"
                                className="rounded-md border border-white/20 px-5 py-3 font-semibold transition-colors hover:bg-white/10"
                            >
                                Trainingsplan
                            </Link>
                        </div>
                    </div>

                    <Image
                        src="/images/judo.jpg"
                        alt="Judo Training"
                        width={900}
                        height={600}
                        className="h-64 w-full object-cover sm:h-80 lg:h-95"
                    />

                </div>
            </section>
        </main>
    );
}