import HeroContent from "@/components/Hero/HeroContent";
import HeroVisual from "@/components/HeroVisual";

export default function Hero() {
  return (
    <section className="flex flex-1 items-center bg-neutral-950 py-[clamp(2rem,5vw,5rem)]">
      <div
        className="
          mx-auto
          grid
          w-full
          min-w-0
          max-w-[1600px]
          grid-cols-1
          items-center
          gap-[clamp(2rem,5vw,5rem)]
          px-[clamp(1.5rem,5vw,4rem)]
          lg:grid-cols-2
        "
      >

        <HeroContent />

        <div className="min-w-0 ">

            <HeroVisual />
            
          </div>


      </div>
    </section>
  );
}