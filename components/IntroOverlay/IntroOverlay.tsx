"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (hasSeenIntro) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);

  if (isVisible === null) {
    return <div className="fixed inset-0 z-50 bg-black" />;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying && (
        <p className="text-white">
          Klicke hier um weiter zu kommen
        </p>
      )}

      {isPlaying && (
        <video
          autoPlay
          muted
          playsInline
          className="h-full w-full object-contain"
          onEnded={() => {
            sessionStorage.setItem("hasSeenIntro", "true");
            setIsVisible(false);
          }}
        >
          <source
            src="/videos/fighter-intro.mp4"
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}