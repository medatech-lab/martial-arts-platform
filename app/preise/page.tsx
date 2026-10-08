
import Link from "next/link";

export const dynamic = "force-dynamic";

const groupPrices = [
  {
    title: "Erwachsene",
    price: "30.–",
    description: "Pro Gruppentraining, alle Sportarten",
    highlight: null,
  },
  {
    title: "Kinder & Jugendliche",
    price: "20.–",
    description: "Pro Gruppentraining bis 15 Jahre",
    highlight: null,
  },
  {
    title: "10er-Abo",
    price: "200.–",
    description: "10 Gruppentrainings für CHF 20.– pro Einheit",
    highlight: "CHF 100.– sparen",
  },
];

const coachingPrices = [
  {
    title: "Personal Coaching",
    price: "420.–",
    unit: "1 Monat",
    description:
      "Inklusive Trainingsplan, 1 Stunde Personaltraining, Ernährungsplan und individueller Betreuung.",
  },
  {
    title: "Duo Personaltraining",
    price: "220.–",
    unit: "60 Minuten · Gesamtpreis für 2 Personen",
    description:
      "Gemeinsam trainieren mit individueller Betreuung.",
  },
  {
    title: "Personal Training",
    price: "160.–",
    unit: "60 Minuten",
    description:
      "Individuelles Training abgestimmt auf deine Ziele.",
  },
  {
    title: "Trainingsplan",
    price: "100.–",
    unit: "Einzelleistung",
    description: "Individueller Trainingsplan.",
  },
  {
    title: "Ernährungsplan",
    price: "100.–",
    unit: "Einzelleistung",
    description: "Individueller Ernährungsplan.",
  },
];

const products = [
  { title: "T-Shirt", price: "30.–" },
  { title: "Harissa 25 g", price: "7.50" },
  { title: "Harissa 90 g", price: "17.50" },
  { title: "Harissa 200 g", price: "35.–" },
  { title: "Harissa 1 kg", price: "Auf Anfrage" },
];

export default function Preise() {
  const showOlma =
    new Date() < new Date("2026-11-12T00:00:00+01:00");

  return (
    <main className="min-h-screen min-w-0 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">

        {/* EINLEITUNG */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 sm:tracking-[0.3em]">
            Saints Workouts
          </p>

          <h1 className="text-[clamp(1.9rem,9vw,2.25rem)] font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Preise & Angebote
          </h1>

          <p className="mt-5 text-sm leading-7 text-neutral-300 sm:mt-6 sm:text-lg sm:leading-8">
            Dein Training. Deine Ziele. Dein Weg. Entdecke unsere
            Trainingsangebote und finde die passende Möglichkeit,
            gemeinsam mit uns stärker zu werden.
          </p>
        </div>

        {/* OLMA-AKTION */}
        {showOlma && (
          <section className="mb-14 rounded-2xl border border-white/20 bg-neutral-900 p-5 sm:mb-20 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
                  Aktuelle Aktion
                </p>

                <h2 className="text-2xl font-bold sm:text-4xl">
                  OLMA Discount
                </h2>

                <p className="mt-3 text-sm leading-7 text-neutral-300 sm:text-base">
                  20 % Rabatt auf ausgewählte Angebote.
                </p>

                <p className="mt-2 text-xs leading-6 text-neutral-400 sm:text-sm">
                  Gültig bis 11. November 2026.
                  Konditionen auf Anfrage.
                </p>

                <a
                  href="https://form.jotform.com/262723220745049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-black transition-colors hover:bg-neutral-300"
                >
                  OLMA-Umfrage starten ↗
                </a>
              </div>

              <div className="shrink-0 text-5xl font-black tracking-tight sm:text-7xl">
                −20%
              </div>
            </div>
          </section>
        )}

        {/* GRUPPENTRAINING */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-7 sm:mb-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
              Gemeinsam trainieren
            </p>

            <h2 className="text-2xl font-bold sm:text-4xl">
              Gruppentraining
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Ein Preis für alle Sportarten. Trainiere flexibel
              und in deinem eigenen Tempo.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {groupPrices.map((item) => (
              <div
                key={item.title}
                className={`flex min-w-0 flex-col rounded-xl border p-5 sm:p-7 ${
                  item.highlight
                    ? "border-white/40 bg-neutral-900"
                    : "border-white/15 bg-neutral-900/60"
                }`}
              >
                {item.highlight && (
                  <span className="mb-5 w-fit rounded-full border border-white/30 px-3 py-1 text-xs font-semibold">
                    {item.highlight}
                  </span>
                )}

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <div className="mt-6 flex items-baseline gap-2 sm:mt-8">
                  <span className="text-sm text-neutral-400">
                    CHF
                  </span>

                  <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {item.price}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-neutral-400">
                  {item.description}
                </p>

                <Link
                  href="/trainingsplan"
                  className="mt-7 rounded-md border border-white/30 px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:mt-8"
                >
                  Trainingsplan ansehen
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-neutral-500 sm:text-sm">
            Die Ersparnis beim 10er-Abo bezieht sich auf zehn
            Einzeltrainings für Erwachsene zum regulären Preis
            von CHF 30.–.
          </p>
        </section>

        {/* PERSONAL COACHING */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-7 sm:mb-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
              Persönlich. Individuell. Zielgerichtet.
            </p>

            <h2 className="text-2xl font-bold sm:text-4xl">
              Personal Coaching & Fitness
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {coachingPrices.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 flex-col rounded-xl border border-white/15 bg-neutral-900/60 p-5 sm:p-7"
              >
                <h3 className="text-lg font-semibold sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {item.unit}
                </p>

                <div className="mt-6 flex items-baseline gap-2 sm:mt-8">
                  <span className="text-sm text-neutral-400">
                    CHF
                  </span>

                  <span className="text-3xl font-bold sm:text-4xl">
                    {item.price}
                  </span>
                </div>

                <p className="mt-5 flex-1 text-sm leading-7 text-neutral-300">
                  {item.description}
                </p>

                <Link
                  href="/kontakt"
                  className="mt-7 rounded-md border border-white/30 px-4 py-3 text-center text-sm font-semibold transition-colors hover:bg-white hover:text-black sm:mt-8"
                >
                  Anfrage stellen
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUKTE */}
        <section className="mb-14 sm:mb-20">
          <div className="mb-7 sm:mb-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-400 sm:tracking-[0.25em]">
              Saints Workouts
            </p>

            <h2 className="text-2xl font-bold sm:text-4xl">
              Merchandise & Feinkost
            </h2>

            <p className="mt-4 text-sm leading-7 text-neutral-300 sm:text-base">
              Produkte auf Bestellung mit Abholung direkt
              beim Training.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/15">
            {products.map((product, index) => (
              <div
                key={product.title}
                className={`flex min-w-0 items-center justify-between gap-3 px-4 py-4 sm:gap-4 sm:px-8 sm:py-5 ${
                  index !== products.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="min-w-0 text-sm font-medium sm:text-base">
                  {product.title}
                </span>

                <span className="shrink-0 text-right text-sm font-semibold text-neutral-200 sm:text-base">
                  {product.price === "Auf Anfrage"
                    ? product.price
                    : `CHF ${product.price}`}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/kontakt"
            className="mt-7 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:mt-8 sm:px-6 sm:text-base"
          >
            Produkte anfragen
          </Link>
        </section>

        {/* ABSCHLUSS */}
        <section className="border-t border-white/15 pt-10 text-center sm:pt-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Bereit für dein nächstes Training?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-300 sm:text-base">
            Entdecke unser Trainingsangebot und sichere dir
            deinen Platz im nächsten Gruppentraining.
          </p>

          <Link
            href="/trainingsplan"
            className="mt-7 inline-flex rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-300 sm:mt-8 sm:px-8 sm:text-base"
          >
            Zum Trainingsplan
          </Link>
        </section>

      </div>
    </main>
  );
}
