
const TIME_ZONE = "Europe/Zurich";

/**
 * Liefert einen Kalendertag im Format YYYY-MM-DD
 * unabhängig von der Zeitzone des Servers.
 */
export function getSwissDate(date: Date): string {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: TIME_ZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).formatToParts(date);

    const get = (type: string) =>
        parts.find((part) => part.type === type)?.value ?? "";

    return `${get("year")}-${get("month")}-${get("day")}`;
}

/**
 * Liefert die aktuelle Schweizer Uhrzeit als HH:mm.
 */
export function getSwissTime(date: Date): string {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: TIME_ZONE,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
    }).formatToParts(date);

    const get = (type: string) =>
        parts.find((part) => part.type === type)?.value ?? "";

    return `${get("hour")}:${get("minute")}`;
}

/**
 * Prüft, ob ein Training noch nicht begonnen hat.
 * Der Trainingsbeginn selbst gilt bereits als vergangen.
 */
export function isUpcomingTraining(
    training: { date: Date; startTime: string },
    now = new Date()
): boolean {
    const trainingDate = getSwissDate(training.date);
    const today = getSwissDate(now);

    return (
        trainingDate > today ||
        (trainingDate === today &&
            training.startTime > getSwissTime(now))
    );
}

/**
 * Speichert einen ausgewählten Kalendertag unabhängig
 * von der lokalen Zeitzone des Servers.
 *
 * 12:00 UTC dient als stabiler Datumsanker.
 * Es ist NICHT die tatsächliche Trainingsbeginnzeit.
 */
export function createTrainingDate(date: string): Date {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new Error("Ungültiges Datumsformat.");
    }

    const result = new Date(`${date}T12:00:00.000Z`);

    if (
        Number.isNaN(result.getTime()) ||
        result.toISOString().slice(0, 10) !== date
    ) {
        throw new Error("Ungültiges Trainingsdatum.");
    }

    return result;
}



/**
 * Berechnet den tatsächlichen Trainingsbeginn als UTC-Zeitpunkt.
 * Datum und Uhrzeit werden als Schweizer Ortszeit interpretiert.
 */
 export function getTrainingStartTimestamp(
    training: { date: Date; startTime: string }
): number {
    const swissDate = getSwissDate(training.date);

    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(
        training.startTime
    );

    if (!match) {
        throw new Error("Ungültige Trainingsbeginnzeit.");
    }

    const hours = Number(match[1]);
    const minutes = Number(match[2]);

    const targetAsUTC = Date.parse(
        `${swissDate}T${training.startTime}:00.000Z`
    );

    // Offset für Europe/Zurich am betreffenden Kalendertag.
    // Mittags liegt die Schweiz zuverlässig in der passenden
    // Sommer- bzw. Winterzeit.
    const noonUTC = new Date(`${swissDate}T12:00:00.000Z`);

    const localNoon = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Zurich",
        hour: "2-digit",
        hourCycle: "h23",
    }).format(noonUTC);

    const offsetHours = Number(localNoon) - 12;

    return targetAsUTC - offsetHours * 60 * 60 * 1000;
}


export function getExactTrainingStart(
    training: { date: Date; startTime: string }
  ): Date {
    const swissDate = getSwissDate(training.date);
  
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(training.startTime)) {
      throw new Error("Ungültige Trainingsbeginnzeit.");
    }
  
    const localStart = `${swissDate}T${training.startTime}:00`;
  
    const candidates = [-2, -1, 0, 1, 2]
      .map((offset) => {
        const utc = new Date(
          Date.parse(`${localStart}Z`) - offset * 3_600_000
        );
  
        const formatted = new Intl.DateTimeFormat("sv-SE", {
          timeZone: "Europe/Zurich",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(utc);
  
        return {
          utc,
          matches: formatted === `${swissDate} ${training.startTime}`,
        };
      })
      .filter((candidate) => candidate.matches);
  
    if (candidates.length !== 1) {
      throw new Error(
        `Trainingsbeginn ${localStart} ist wegen der Zeitumstellung ungültig oder nicht eindeutig.`
      );
    }
  
    return candidates[0].utc;
  }
  