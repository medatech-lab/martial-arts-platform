import Link from "next/link";

export default function PrimaryButton () {
    return (
        <Link   type="button"
                className="rounded-md
                 bg-white 
                 px-6 
                 py-3 
                 font-semibold
                text-black 
                transition
                hover:bg-neutral-200"
        >

            Starte hier dein Probetraining!

        </Link>
    )
};
