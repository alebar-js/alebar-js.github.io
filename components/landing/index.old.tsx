import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Typewriter from "./Typewriter";
import LogoCanvas from "./LogoCanvas";
import Deck from "./Deck/Deck";
import AboutSection from "./AboutSection";
import { useGesture } from "@use-gesture/react";

const LandingPage = () => {
  const [deckShowing, showDeck] = useState(false);
  const deckObserver = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const deckTop = deckObserver.current?.offsetTop;
    const deckHeight = deckObserver.current?.clientHeight;
    const triggerPoint = deckHeight
      ? window.innerHeight / 2 - deckHeight / 2
      : Number.MIN_SAFE_INTEGER;
    if (deckTop && window.scrollY >= deckTop + triggerPoint) {
      showDeck(true);
    }
  };

  const gesture = useGesture({
    onScroll: handleScroll,
    onWheel: handleScroll,
  });

  return (
    <div className="flex" {...gesture()}>
      <Sidebar />
      <div className="n ml-[20%] w-[80%] ">
        <LogoCanvas></LogoCanvas>
        <AboutSection />
        <div
          ref={deckObserver}
          className="relative flex min-h-full max-w-full items-center justify-center overflow-hidden"
        >
          {deckShowing && <Deck />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
