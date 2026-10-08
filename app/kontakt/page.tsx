
import Link from "next/link";

const contactTopics = [
  {
    number: "01",
    title: "Allgemeine Fragen",
    description:
      "Du möchtest mehr über Saints Workouts, unsere Trainings oder den Ablauf erfahren? Wir helfen dir gerne weiter.",
  },
  {
    number: "02",
    title: "Personal Coaching",
    description:
      "Du interessierst dich für individuelles Training, Trainingspläne oder Ernährungsberatung? Lass uns über deine Ziele sprechen.",
  },
  {
    number: "03",
    title: "Mitgliedschaft & Angebote",
    description:
      "Fragen zu Gruppentrainings, dem 10er-Abo oder unseren aktuellen Angeboten? Wir beraten dich gerne.",
  },
];

export default function Kontakt() {
  return (
    <main className="min-h-screen min-w-0 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">

        {/* HERO */}
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 sm:tracking-[0.3em]">
            Saints Workouts
          </p>

          <h1 className="text-[clamp(1.9rem,9vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Kontakt
            <span className="block text-neutral-400">
              Wir sind für dich da.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 sm:mt-8 sm:text-lg sm:leading-8">
            Du hast Fragen zu unserem Training, möchtest mehr
            über unsere Angebote erfahren oder interessierst
            dich für ein persönliches Coaching?
            Wir freuen uns darauf, von dir zu hören.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/probetraining"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:px-7 sm:text-base"
            >
              Probetraining entdecken
            </Link>

            <Link
              href="/trainingsplan"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:px-7 sm:text-base"
            >
              Trainingsplan ansehen
            </Link>
          </div>
        </section>

        {/* KONTAKTMÖGLICHKEITEN */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
                Deine Anfrage
              </p>

              <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
                Lass uns sprechen.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
                Ob du gerade erst mit Kampfsport beginnst
                oder bereits Erfahrung mitbringst:
                Wir beantworten gerne deine Fragen
                und unterstützen dich dabei,
                das passende Training zu finden.
              </p>

              <div className="mt-8 space-y-5 sm:mt-10">
                <div className="border-b border-white/10 pb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Ansprechpartner
                  </p>
                  <p className="mt-2 text-base font-semibold sm:text-lg">
                    Damian
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">
                    Gründer & Trainer
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    E-Mail
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Kontaktadresse wird ergänzt.
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Telefon
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">
                    Telefonnummer wird ergänzt.
                  </p>
                </div>
              </div>
            </div>

            {/* INFO-KARTE */}
            <div className="flex min-w-0 flex-col justify-between rounded-2xl border border-white/15 bg-neutral-900 p-5 sm:p-8 lg:p-10">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
                  Dein erster Schritt
                </p>

                <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                  Bereit, etwas Neues auszuprobieren?
                </h3>

                <p className="mt-5 text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
                  Lerne Saints Workouts kennen und entdecke,
                  welches Training zu dir passt.
                  Ganz gleich, ob du Anfänger bist oder
                  bereits Kampfsporterfahrung hast.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/probetraining"
                  className="inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:px-7 sm:text-base"
                >
                  Zum Probetraining
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ANFRAGE-THEMEN */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
            Wir helfen dir weiter
          </p>

          <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">
            Wobei können wir dir helfen?
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-5">
            {contactTopics.map((topic) => (
              <div
                key={topic.number}
                className="flex min-w-0 flex-col rounded-xl border border-white/15 bg-neutral-900/60 p-5 sm:p-7"
              >
                <span className="text-sm font-semibold text-neutral-500">
                  {topic.number}
                </span>

                <h3 className="mt-6 text-lg font-bold sm:mt-8 sm:text-xl">
                  {topic.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABSCHLUSS */}
        <section className="rounded-2xl border border-white/15 bg-neutral-900 px-5 py-10 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400 sm:text-xs sm:tracking-[0.25em]">
            Saints Workouts
          </p>

          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
            Dein nächstes Training wartet.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
            Entdecke unser Angebot, finde das passende
            Training und werde Teil unserer Gemeinschaft.
          </p>

          <Link
            href="/trainingsplan"
            className="mt-7 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:mt-9 sm:px-8 sm:text-base"
          >
            Trainingsplan entdecken
          </Link>
        </section>
      </div>
    </main>
  );
}
