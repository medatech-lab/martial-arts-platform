
"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            aria-disabled={pending}
            className="rounded-md bg-white px-5 py-3 font-semibold text-black transition-colors hover:bg-neutral-300 disabled:cursor-wait disabled:bg-neutral-400"
        >
            {pending
                ? "Buchung wird verarbeitet …"
                : "Verbindlich buchen"}
        </button>
    );
}
