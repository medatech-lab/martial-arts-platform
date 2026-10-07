import PrimaryButton from "@/components/PrimaryButton";

export default function HeroContent () {
    return (
        <div className="max-w-3xl min-[427px]:translate-x-4 lg:translate-x-0">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
             Saints Workouts
            </p>

            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight text-white">
                Stärke beginnt mit dem ersten Schritt.
            </h1>

            <p className="mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-6 lg:leading-8 text-neutral-300">
                Kampfsport für Anfänger und fortgeschrittene
            </p>
           
            <div className="mt-8 flex">
                <PrimaryButton />
            </div>

        </div>
    );
}


