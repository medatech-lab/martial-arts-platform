
export default function OlmaPromo() {
  // Automatisch ausblenden ab 12.11.2026, 00:00 Schweizer Zeit
  const endDate = new Date("2026-11-12T00:00:00+01:00");

  if (new Date() >= endDate) {
    return null;
  }

  return (
    <div className="w-full max-w-72.5 rounded-2xl border border-amber-400/30 bg-neutral-900/95 p-4 shadow-xl shadow-black/30">
      <div className="w-full max-w-75.2 translate-x-[100px] translate-y-[100px]">
        <OlmaPromo />
      </div>

      <h2 className="mt-2 text-2xl font-bold text-white">
        20 % Rabatt
      </h2>

      <p className="mt-2 text-xs leading-5 text-neutral-300">
        Entdecke Saints Workouts und sichere dir deine OLMA-Aktion.
        Gültig bis 11.11.2026.
      </p>

      <a
        href="https://form.jotform.com/262723220745049"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-center text-xs font-semibold text-black transition hover:bg-neutral-200"
      >
        OLMA-Umfrage starten
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
