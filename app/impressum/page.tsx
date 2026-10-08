
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Saints Workouts",
  description: "Impressum und Kontaktangaben von Saints Workouts.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 pb-20 pt-32 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Saints Workouts
        </p>

        <h1 className="mb-8 text-4xl font-bold sm:text-5xl">
          Impressum
        </h1>

        <div className="space-y-10 text-neutral-300">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Anbieter
            </h2>

            <p>Saints Workouts</p>
            <p>Inhaber: Damian [Nachname ergänzen]</p>
            <p>[Strasse und Hausnummer]</p>
            <p>[PLZ und Ort], Schweiz</p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Kontakt
            </h2>

            <p>E-Mail: [E-Mail-Adresse ergänzen]</p>
            <p>Telefon: [Telefonnummer ergänzen]</p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Haftung für Inhalte
            </h2>

            <p className="leading-7">
              Die Inhalte dieser Website werden mit Sorgfalt
              erstellt und regelmässig überprüft.
              Dennoch kann keine Gewähr für die
              Vollständigkeit, Richtigkeit und Aktualität
              sämtlicher Informationen übernommen werden.
              Gesetzliche Haftungsansprüche bleiben vorbehalten.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Externe Links
            </h2>

            <p className="leading-7">
              Diese Website kann Links zu externen Websites
              enthalten. Für deren Inhalte sind die jeweiligen
              Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Urheberrecht
            </h2>

            <p className="leading-7">
              Texte, Bilder, Logos und weitere Inhalte
              dieser Website unterliegen den jeweils
              geltenden Urheberrechten. Eine Verwendung
              ausserhalb der gesetzlichen Schranken
              bedarf der Zustimmung der jeweiligen
              Rechteinhaber.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
