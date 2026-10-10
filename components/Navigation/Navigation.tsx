"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation () {
    const [isOpen, setIsOpen] = useState(false);
    const [isOfferOpen, setIsOfferOpen] = useState(false);
    return (
      <header className="w-full border-b border-white/10 bg-black text-white">
          <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-[clamp(1.5rem,5vw,4rem)] py-4">


            <Link className="text-lg font-bold tracking-[0.25em] -ml-[clamp(0px,2.5vw,40px)] text-white" href="/">
              SAINTS WORKOUTS
            </Link>

            <div className="hidden items-center gap-6 text-white lg:flex">
                <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-neutral-400 transition-colors">
                  Home
                </Link>

                <div className="group relative">
                    <button className="hover:text-neutral-400 transition-colors">
                        Angebot
                    </button>

                    <div className="
                        invisible
                        absolute
                        left-0
                        top-full
                        z-50
                        min-w-48
                       bg-black
                        py-3
                        opacity-0
                        transition-all
                        group-hover:visible
                        group-hover:opacity-100
                    ">
                        <Link
                            href="/angebot/judo"
                            className="block px-4 py-2 hover:text-neutral-400 transition-colors">
                            Judo
                        </Link>

                        <Link
                            href="/angebot/karate"
                            className="block px-4 py-2 hover:text-neutral-400 transition-color">
                            Karate
                        </Link>

                        <Link
                            href="/angebot/jiu-jitsu"
                            className="block px-4 py-2 hover:text-neutral-400 transition-colors"
                        >
                              Jiu-Jitsu
                        </Link>

                        <Link
                            href="/angebot/kickboxen"
                            className="block px-4 py-2 hover:text-neutral-400 transition-colors"
                        >
                            Kickboxen
                        </Link>

                        <Link
                            href="/angebot/kids-workout"
                            className="block px-4 py-2 hover:text-neutral-400 transition-colors"
                        >
                            Kids-Workout
                        </Link>

                        <Link
                          href="/angebot/personal-training"
                          className="block px-4 py-2 hover:text-neutral-400 transition-colors">
                          Personal Training
                        </Link>

                    </div>
                </div>

                <Link href="/trainingsplan" className="hover:text-neutral-400 transition-colors">Trainingsplan</Link>
                <Link href="/preise" className="hover:text-neutral-400 transition-colors">Preise</Link>
                <Link href="/ueber-uns" className="hover:text-neutral-400 transition-colors">Über uns</Link>
                <Link href="/kontakt" className="hover:text-neutral-400 transition-colors">Kontakt</Link>
                <Link href="/probetraining"onClick={() => setIsOpen(false)} className="rounded-md bg-white px-4 py-2 font-semibold text-black hover:bg-neutral-400 transition-colors">Probetraining</Link>
            </div>

            <button className="text-white lg:hidden" onClick={() => setIsOpen (!isOpen)}>
                Menü          
            </button>

        </nav>

        {isOpen && (
            <>

            {/* Mobile: 0–639px */}
            <div className="
             grid
             grid-cols-2
             gap-x-8
             gap-y-4
             px-6
             py-4
             sm:hidden
            ">
              <Link href="/" onClick={() => setIsOpen(false)}>
               Home
              </Link>

              <div>
                <button onClick={() => setIsOfferOpen(!isOfferOpen)}>
                  Angebot
                </button>
              </div>
                {isOfferOpen && (
                  <div className="col-span-2 grid grid-cols-3 gap-3 border-y border-white/10 py-3 text-xs text-neutral-300">
                    
                    <Link
                    href="/angebot/jiu-jitsu"
                    onClick={() => setIsOpen(false)}
                    >
                    Jiu-Jitsu
                    </Link>

                    <Link
                    href="/angebot/kickboxen"
                    onClick={() => setIsOpen(false)}
                    >
                    Kickboxen
                    </Link>

                    <Link
                    href="/angebot/kids-workout"
                    onClick={() => setIsOpen(false)}
                    >
                    Kids-Workout
                    </Link>

                    <Link
                    href="/angebot/personal-training"
                    onClick={() => setIsOpen(false)}
                    >
                    Personal-Training
                    </Link>

                    <Link
                    href="/angebot/karate"
                    onClick={() => setIsOpen(false)}
                    >
                    Karate
                    </Link>

                    <Link
                    href="/angebot/judo"
                    onClick={() => setIsOpen(false)}
                    >
                    Judo
                    </Link>
                </div>
              )}
            

                <Link href="/trainingsplan" onClick={() => setIsOpen(false)}>Trainingsplan</Link>
                <Link href="/preise" onClick={() => setIsOpen(false)}>Preise</Link>
                <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>Über uns</Link>
                <Link href="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</Link>
                <Link href="/probetraining" onClick={() => setIsOpen(false)}>Probetraining</Link>
            </div>


            {/* Tablet: 640–1023px */}
            <div className="
              hidden
              px-6
              py-4
              sm:grid
              sm:grid-cols-3
              sm:gap-x-12
              lg:hidden
            ">

            {/* Gruppe 1: Einstieg */}
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <button className="text-left" onClick={() => setIsOfferOpen(!isOfferOpen)}>
              Angebot
              </button>
                {isOfferOpen && (
                  <div className="flex flex-col gap-2 pl-3 text-sm text-neutral-400">
                    <Link href="/angebot/jiu-jitsu" onClick={() => setIsOpen(false)}>
                      Jiu-Jitsu
                    </Link>

                    <Link href="/angebot/kickboxen" onClick={() => setIsOpen(false)}>
                      Kickboxen
                    </Link>

                    <Link href="/angebot/kids-workout" onClick={() => setIsOpen(false)}>
                      Kids-Workout
                    </Link>
                  </div>
)}
              <Link href="/probetraining" onClick={() => setIsOpen(false)}>
                Probetraining
              </Link>
            </div>

            {/* Gruppe 2: Training */}
            <div className="flex flex-col gap-4">
              <Link href="/trainingsplan" onClick={() => setIsOpen(false)}>Trainingsplan</Link>
              <Link href="/preise" onClick={() => setIsOpen(false)}>Preise</Link>
            </div>

            {/* Gruppe 3: Schule */}
            <div className="flex flex-col gap-4">
              <Link href="/ueber-uns" onClick={() => setIsOpen(false)}>Über uns</Link>
              <Link href="/kontakt" onClick={() => setIsOpen(false)}>Kontakt</Link>
            </div>

          </div>

         </>
      )}

    </header>

  );
}