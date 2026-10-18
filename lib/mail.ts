
export async function sendEmail(
    to: string,
    subject: string,
    text: string
  ) {
    const apiKey = process.env.RESEND_API_KEY;
  
    if (!apiKey) {
      throw new Error("RESEND_API_KEY fehlt.");
    }
  
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Saints Workouts <info@saints-workouts.ch>",
        to: [to],
        subject,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
  
    const result = await response.json();
  
    if (!response.ok) {
      throw new Error(
        `Resend-Fehler (${response.status}): ${JSON.stringify(result)}`
      );
    }
  
    return result;
  }
  