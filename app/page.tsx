
import IntroOverlay from "@/components/IntroOverlay";
import Hero from "@/components/Hero";
import SportsSection from "@/components/SportsSection";

// Seite bei jedem Aufruf neu rendern.
// Dadurch verschwindet die OLMA-Aktion automatisch
// ab dem 12. November 2026.
export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <>
            <IntroOverlay />
            <Hero />
            <SportsSection />
        </>
    );
}
