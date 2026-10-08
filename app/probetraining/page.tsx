
import Link from "next/link";

/*
 * PROBETRAINING-EINSTELLUNGEN
 *
 * Vorläufige Konditionen.
 * Nach Freigabe durch Damian anpassen.
 *
 * Später können diese Werte aus der
 * Datenbank / dem Adminbereich kommen.
 */
const trialSettings = {
  freeWithTenPack: true,
  minimumPackage: "10er-Abo",
  adultPrice: 30,
  youthPrice: 20,
  youthMaxAge: 15,
  approved: true,
};

const steps = [
  {
    number: "01",
    title: "Training auswählen",
    description:
      "Entdecke unseren Trainingsplan und wähle einen passenden Termin.",
  },
  {
    number: "02",
    title: "Platz reservieren",
    description:
      "Melde dich online für das gewünschte Training an.",
  },
  {
    number: "03",
    title: "Saints Workouts kennenlernen",
    description:
      "Komm vorbei, lerne das Training kennen und entscheide, wie du weitermachen möchtest.",
  },
];

const benefits = [
  {
    title: "Für Einsteiger geeignet",
    description:
      "Du benötigst keine Kampfsporterfahrung. Motivation und Neugier reichen für den Anfang.",
  },
  {
    title: "Persönliches Kennenlernen",
    description:
      "Erlebe das Training, die Atmosphäre und die Menschen hinter Saints Workouts.",
  },
  {
    title: "Verschiedene Sportarten",
    description:
      "Entdecke unser Angebot und finde die Trainingsform, die zu dir passt.",
  },
];

export default function Probetraining() {
  return (
    <main className="min-h-screen min-w-0 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">

        {/* HERO */}
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 sm:tracking-[0.3em]">
            Saints Workouts
          </p>

          <h1 className="max-w-4xl text-[clamp(1.75rem,8vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Dein erstes Training.
            <span className="block text-neutral-400">
              Dein erster Schritt.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 sm:mt-8 sm:text-lg sm:leading-8">
            Du möchtest Saints Workouts kennenlernen?
            Wähle ein Training, reserviere deinen Platz
            und entdecke, was in dir steckt.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href="/trainingsplan"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:px-7 sm:text-base"
            >
              Training auswählen
            </Link>

            <Link
              href="/#sportarten"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:px-7 sm:text-base"
            >
              Sportarten entdecken
            </Link>
          </div>
        </section>

        {/* KONDITIONEN */}
        <section className="mb-16 sm:mb-24 lg:mb-32">
          <div className="rounded-2xl border border-white/20 bg-neutral-900 p-5 sm:p-8 lg:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
              Probetraining & Konditionen
            </p>

            <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-4xl">
              Erst ausprobieren.
              <span className="block text-neutral-400">
                Dann entscheiden.
              </span>
            </h2>

            {trialSettings.approved ? (
              <>
                {trialSettings.freeWithTenPack && (
                  <div className="mt-8 rounded-xl border border-white/20 bg-neutral-950 p-5 sm:p-7">
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      Dein Vorteil
                    </p>

                    <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                      Probetraining kostenlos mit 10er-Abo
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
                      Entscheidest du dich anschliessend
                      für ein {trialSettings.minimumPackage},
                      wird dir das Probetraining kostenlos
                      angerechnet.
                    </p>
                  </div>
                )}

                <p className="mt-6 text-sm leading-7 text-neutral-300 sm:text-base">
                  Ohne anschliessenden Aboabschluss gelten
                  die regulären Preise für Gruppentrainings:
                  CHF {trialSettings.adultPrice}.– für Erwachsene
                  und CHF {trialSettings.youthPrice}.– für Kinder
                  und Jugendliche bis {trialSettings.youthMaxAge} Jahre.
                </p>
              </>
            ) : (
              <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
                Die Konditionen für das Probetraining
                werden derzeit festgelegt. Bitte kläre
                vor deiner Teilnahme direkt mit uns,
                welche Kosten gegebenenfalls entstehen.
              </p>
            )}

            <Link
              href="/kontakt"
              className="mt-7 inline-flex rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:px-7 sm:text-base"
            >
              Konditionen anfragen
            </Link>
          </div>
        </section>

        {/* ABLAUF */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
            So funktioniert es
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            In drei Schritten zum Training.
          </h2>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-3 md:gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex min-w-0 flex-col rounded-xl border border-white/15 bg-neutral-900/60 p-5 sm:p-7"
              >
                <span className="text-sm font-semibold text-neutral-500">
                  {step.number}
                </span>

                <h3 className="mt-6 text-lg font-bold sm:mt-8 sm:text-xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* VORTEILE */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
                Dein Einstieg
              </p>

              <h2 className="max-w-lg text-2xl font-bold tracking-tight sm:text-4xl">
                Jeder hat einmal angefangen.
              </h2>

              <p className="mt-6 text-sm leading-7 text-neutral-300 sm:text-base sm:leading-8">
                Du musst weder besonders fit sein
                noch bereits eine Kampfsportart beherrschen.
                Entscheidend ist, dass du den ersten Schritt machst.
              </p>

              <Link
                href="/ueber-uns"
                className="mt-8 inline-flex rounded-md border border-white/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:px-7 sm:text-base"
              >
                Mehr über uns
              </Link>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl border border-white/15 bg-neutral-900/60 p-5 sm:p-7"
                >
                  <h3 className="text-lg font-bold sm:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VORBEREITUNG */}
        <section className="mb-16 border-t border-white/15 pt-12 sm:mb-24 sm:pt-16 lg:mb-32">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
            Gut vorbereitet
          </p>

          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Was du mitbringen solltest.
          </h2>

          <div className="mt-8 rounded-2xl border border-white/15 bg-neutral-900 p-5 sm:mt-10 sm:p-8">
            <ul className="space-y-5 text-sm leading-7 text-neutral-300 sm:text-base">
              <li>
                <span className="font-semibold text-white">
                  Sportkleidung:
                </span>{" "}
                Bequeme Kleidung für ausreichend Bewegungsfreiheit.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Wasser:
                </span>{" "}
                Eine Trinkflasche für die Trainingspausen.
              </li>

              <li>
                <span className="font-semibold text-white">
                  Motivation:
                </span>{" "}
                Offenheit, etwas Neues auszuprobieren.
              </li>
            </ul>

            <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-neutral-400 sm:text-sm">
              Je nach Sportart kann zusätzliche Ausrüstung
              erforderlich sein. Bei Fragen helfen wir dir gerne.
            </p>
          </div>
        </section>

        {/* ABSCHLUSS */}
        <section className="rounded-2xl border border-white/15 bg-neutral-900 px-5 py-10 text-center sm:px-12 sm:py-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-neutral-400 sm:text-xs sm:tracking-[0.25em]">
            Saints Workouts
          </p>

          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-4xl">
            Bereit, loszulegen?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-base sm:leading-8">
            Entdecke die nächsten Trainingstermine
            und reserviere deinen Platz.
          </p>

          <Link
            href="/trainingsplan"
            className="mt-7 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:mt-9 sm:px-8 sm:text-base"
          >
            Jetzt Training auswählen
          </Link>
        </section>

      </div>
    </main>
  );
}
