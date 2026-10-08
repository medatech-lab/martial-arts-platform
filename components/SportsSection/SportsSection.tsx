import Image from "next/image";
import Link from "next/link";  


const sports = [
    {
        title: "Jiu-Jitsu",
        description:
            "Technik, Kontrolle und Strategie. Für Einsteiger und Fortgeschrittene, die sich technisch und körperlich weiterentwickeln wollen.",
        image: "/images/jiu-jitsu.jpg",
        href: "/angebot/jiu-jitsu",
    },
    {
        title: "Kickboxen",
        description:
            "Dynamisches Training für Technik, Kondition und Schlagkraft – vom Einstieg bis zum ambitionierten Training.",
        image: "/images/kickboxen.jpg",
        href: "/angebot/kickboxen",
    },
    {
        title: "Kids-Workout",
        description:
            "Bewegung, Koordination und Selbstvertrauen – altersgerecht und mit Freude am Training.",
        image: "/images/kids-workout.jpg",
        href: "/angebot/kids-workout",
    },
    {
        title: "Personal Training",
        description:
            "Individuelles Training mit persönlicher Betreuung – abgestimmt auf deine Ziele, dein Niveau und deinen Zeitplan.",
        image: "/images/personal-training.jpg",
        href: "/angebot/personal-training",
    },
    {
        title: "Karate",
        description:
            "Technik, Präzision und Körperkontrolle – für eine starke körperliche und mentale Entwicklung.",
        image: "/images/karate.jpg",
        href: "/angebot/karate",
    },
    {
        title: "Judo",
        description:
            "Würfe, Kontrolle und Technik – vielseitiges Training für Kraft, Koordination und Körpergefühl.",
        image: "/images/judo.jpg",
        href: "/angebot/judo",
    },
];

    export default function SportsSection() {
        return (
            <section id="sportarten"
                className="bg-neutral-950 pt-[clamp(1.5rem,2vw,2.5rem)] pb-[clamp(4rem,8vw,8rem)]
                scroll-mt-20"
            >
                <div className="mx-auto w-full max-w-[1600px] px-[clamp(1.5rem,5vw,4rem)]">

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                            Unser Training
                        </p>

                        <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-white">
                            Finde das Training, das zu dir passt.
                        </h2>

                        <p className="mt-6 max-w-2xl text-neutral-300">
                            Ob Einstieg, Fitness oder ambitioniertes Training – bei uns findest du
                            den passenden Weg.
                        </p>
                    </div>


                    <div className="mt-16">
                        {sports.map((sport) => (
                            <div
                                key={sport.title}
                                className="border-t border-white/15 py-10"
                            >
                                <div className="
                                grid
                                gap-6
                                md:grid-cols-[1fr_220px]
                                lg:grid-cols-[1fr_380px]
                                ">

                                    <div>
                                        <Link href={sport.href}>
                                            <h3 className="text-3xl font-bold uppercase text-white">
                                            {sport.title}
                                            </h3>
                                        </Link>

                                        <p className="mt-3 max-w-xl text-neutral-300">
                                            {sport.description}
                                        </p>
                                    </div>

                                    <Link href={sport.href}>
                                        <Image
                                            src={sport.image}
                                            alt={sport.title}
                                            width={600}
                                            height={400}
                                            className="h-56 w-full object-cover md:h-40"
                                        />
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        );
    }