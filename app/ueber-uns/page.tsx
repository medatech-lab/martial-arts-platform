
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Respekt",
    description:
      "Ein respektvoller Umgang miteinander bildet die Grundlage jedes Trainings. Unabhängig von Erfahrung, Alter oder Leistungsstand.",
  },
  {
    number: "02",
    title: "Disziplin",
    description:
      "Fortschritt entsteht durch Beständigkeit. Wir setzen auf kontinuierliches Training, Geduld und den Willen, sich weiterzuentwickeln.",
  },
  {
    number: "03",
    title: "Gemeinschaft",
    description:
      "Gemeinsam trainieren, voneinander lernen und sich gegenseitig motivieren. Jeder Fortschritt zählt.",
  },
];

const offers = [
  {
    title: "Kampfsport",
    description:
      "Technik, Koordination, Selbstvertrauen und körperliche Fitness. Für Einsteiger und Fortgeschrittene.",
    href: "/#sportarten",
  },
  {
    title: "Kids-Workout",
    description:
      "Bewegung, Koordination und Freude am Training in einer motivierenden Umgebung.",
    href: "/angebot/kids-workout",
  },
  {
    title: "Personal Training",
    description:
      "Individuelle Betreuung und gezieltes Training, abgestimmt auf deine persönlichen Ziele.",
    href: "/angebot/personal-training",
  },
];

export default function UeberUns() {
  return (
    <main className="min-h-screen min-w-0 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">

        {/* HERO */}
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 sm:tracking-[0.3em]">
            Saints Workouts
          </p>

          <h1 className="max-w-5xl text-[clamp(1.75rem,8vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Mehr als Training.
            <span className="block text-neutral-400">
              Eine gemeinsame Leidenschaft.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 sm:mt-8 sm:text-lg sm:leading-8">
            Saints Workouts steht für Bewegung, persönliche
            Weiterentwicklung und die Begeisterung für Kampfsport.
            Wir schaffen einen Ort, an dem Menschen gemeinsam
            trainieren, ihre Grenzen kennenlernen und über sich
            hinauswachsen können.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/trainingsplan"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:px-7 sm:text-base"
            >
              Trainingsplan entdecken
            </Link>

            <Link
              href="/probetraining"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:px-7 sm:text-base"
            >
              Probetraining
            </Link>
          </div>
        </section>

        {/* PHILOSOPHIE */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <div className="mb-9 grid gap-6 sm:mb-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
                Unsere Philosophie
              </p>

              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Stärke beginnt
                <span className="block">
                  mit der Einstellung.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
              Für uns bedeutet Stärke mehr als körperliche
              Leistungsfähigkeit. Es geht darum, Herausforderungen
              anzunehmen, dranzubleiben und sich Schritt für
              Schritt zu verbessern. Im Training ebenso wie
              ausserhalb davon.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {values.map((value) => (
              <div
                key={value.number}
                className="min-w-0 rounded-xl border border-white/15 bg-neutral-900/60 p-5 sm:p-7"
              >
                <span className="text-sm font-semibold text-neutral-500">
                  {value.number}
                </span>

                <h3 className="mt-6 text-xl font-bold sm:mt-8 sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ANGEBOT */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
            Was uns ausmacht
          </p>

          <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">
            Dein Weg. Dein Training.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
            Ob du zum ersten Mal Kampfsport ausprobierst,
            deine Technik verbessern oder gezielt an deiner
            Fitness arbeiten möchtest: Bei Saints Workouts
            findest du verschiedene Möglichkeiten, aktiv
            zu werden.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-5">
            {offers.map((offer) => (
              <Link
                key={offer.title}
                href={offer.href}
                className="group flex min-w-0 flex-col rounded-xl border border-white/15 bg-neutral-900/60 p-5 transition-colors hover:border-white/50 sm:p-7"
              >
                <h3 className="text-lg font-bold sm:text-xl">
                  {offer.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-neutral-300">
                  {offer.description}
                </p>

                <span className="mt-7 inline-flex w-fit text-sm font-semibold text-white transition-transform group-hover:translate-x-1 sm:mt-8">
                  Mehr erfahren →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* GRÜNDER */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
            <div className="flex aspect-4/3 min-w-0 items-center justify-center rounded-2xl border border-white/15 bg-neutral-900">
              <div className="text-center">
                <span className="block text-6xl font-black tracking-tighter text-white/10 sm:text-8xl">
                  SW
                </span>

                <span className="mt-3 block text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs sm:tracking-[0.3em]">
                  Saints Workouts
                </span>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
                Der Mensch hinter Saints Workouts
              </p>

              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Damian
              </h2>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 sm:text-sm">
                Gründer & Trainer
              </p>

              <p className="mt-6 text-sm leading-7 text-neutral-300 sm:mt-8 sm:text-base sm:leading-8">
                Hinter Saints Workouts steht Damian mit dem Ziel,
                Menschen durch Training zusammenzubringen
                und sie auf ihrem persönlichen Weg zu begleiten.
              </p>

              <p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
                Im Mittelpunkt stehen die Freude an der Bewegung,
                individuelle Fortschritte und eine Atmosphäre,
                in der sich sowohl Anfänger als auch erfahrene
                Sportler willkommen fühlen.
              </p>

              <Link
                href="/kontakt"
                className="mt-7 inline-flex rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:mt-9 sm:px-7 sm:text-base"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </section>

        {/* ABSCHLUSS */}
        <section className="rounded-2xl border border-white/15 bg-neutral-900 px-5 py-10 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400 sm:text-xs sm:tracking-[0.25em]">
            Werde Teil von Saints Workouts
          </p>

          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
            Jeder Fortschritt beginnt
            mit dem ersten Schritt.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
            Egal, wo du heute stehst: Entscheidend ist,
            dass du anfängst. Wir freuen uns darauf,
            dich beim Training kennenzulernen.
          </p>

          <Link
            href="/probetraining"
            className="mt-7 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:mt-9 sm:px-8 sm:text-base"
          >
            Jetzt Probetraining entdecken
          </Link>
        </section>

      </div>
    </main>
  );
}
