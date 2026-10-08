
import Image from "next/image";
import Link from "next/link";

export default function HeroVisual() {
  return (
    <div className="grid w-full min-w-0 place-items-center gap-2 lg:gap-4 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">

      {/* LINKE SPORTARTEN */}
      <div className="
        row-start-1
        col-start-1
        flex
        flex-col
        gap-4
        text-center
        text-xs
        uppercase
        tracking-[0.15em]
        sm:tracking-[0.2em]
        lg:tracking-[0.3em]
        text-neutral-300
        lg:col-start-1
        lg:row-start-1
        lg:text-left
      ">
        <Link
          href="/angebot/kickboxen"
          className="hover:text-white transition-colors"
        >
          <p>Kickboxen</p>
        </Link>

        <Link
          href="/angebot/jiu-jitsu"
          className="hover:text-white transition-colors"
        >
          <p>Jiu-Jitsu</p>
        </Link>

        <Link
          href="/angebot/personal-training"
          className="hover:text-white transition-colors"
        >
          <p>Personal-Training</p>
        </Link>
      </div>

      {/* LOGO UND ELLIPSEN */}
      <div
        className="
          col-start-2
          row-start-1
          grid
          aspect-square
          w-[clamp(110px,35vw,410px)]
          place-items-center
          lg:row-start-1
          lg:col-start-2
        "
      >
        <div
          className="
            col-start-1
            row-start-1
            h-[70%]
            w-[55%]
            rounded-full
            border
            border-white/40
            animate-spin
            [animation-duration:35s]
          "
        />

        <div
          className="
            col-start-1
            row-start-1
            h-[58%]
            w-[85%]
            rounded-full
            border
            border-white/30
            animate-spin
            [animation-duration:50s]
            [animation-direction:reverse]
          "
        />

        <Image
          src="/images/SaintsWorkoutsLogo.png"
          alt="Saints Workouts Logo"
          width={2000}
          height={2829}
          className="
            col-start-1
            row-start-1
            z-10
            h-auto
            w-[clamp(70px,18vw,180px)]
          "
        />
      </div>

      {/* RECHTE SPORTARTEN */}
      <div className="
        col-start-3
        row-start-1
        flex
        flex-col
        gap-4
        text-center
        text-xs
        uppercase
        tracking-[0.15em]
        sm:tracking-[0.2em]
        lg:tracking-[0.3em]
        text-neutral-300
        lg:col-start-3
        lg:row-start-1
        lg:text-left
      ">
        <Link
          href="/angebot/karate"
          className="hover:text-white transition-colors"
        >
          Karate
        </Link>

        <Link
          href="/angebot/judo"
          className="hover:text-white transition-colors"
        >
          Judo
        </Link>

        <Link
          href="/angebot/kids-workout"
          className="hover:text-white transition-colors"
        >
          Kids-Workout
        </Link>
      </div>
    </div>
  );
}
