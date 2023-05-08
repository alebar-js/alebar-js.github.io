import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Sidebar from "./Sidebar";
import Image from "next/image";
import Deck from "./Deck/Deck";
import LogoCanvas from "./LogoCanvas/LogoCanvas2";
import AboutSection from "./AboutSection";
import arrowDown from "../../public/circle-arrow-down-solid.svg";
import Button from "./Button";

const LandingPage = () => {
  const [deckShowing, showDeck] = useState(false);
  const parallax = React.useRef<IParallax>(null);

  const handleScroll = () => {
    showDeck(parallax.current?.offset == 2);
  };

  useEffect(() => {
    const container = document.querySelector(".parallax");
    container?.addEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (offset: number) => parallax.current?.scrollTo(offset);

  return (
    <div className="flex">
      <Parallax pages={3} ref={parallax} className="parallax">
        {/* Sidebar sticky layer */}
        <ParallaxLayer sticky={{ start: 0, end: 3 }} className="max-w-[30%]">
          <Sidebar onScroll={(offset: number) => scrollTo(offset)} />
        </ParallaxLayer>

        {/* Logo canvas and greeting layer */}
        <ParallaxLayer offset={0} className="flex justify-end">
          <LogoCanvas handleClick={() => scrollTo(1)} />
        </ParallaxLayer>

        {/* Triangle Layer */}
        <ParallaxLayer
          offset={1}
          speed={1.2}
          className="relative h-full w-full"
        >
          <div
            className="absolute h-full w-full bg-[#fa8072]"
            style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
          />
        </ParallaxLayer>

        {/* About Me text layer */}
        <ParallaxLayer offset={1} className="flex justify-end">
          <AboutSection handleClick={() => scrollTo(2)} />
        </ParallaxLayer>

        {/* Deck layer */}
        <ParallaxLayer offset={2} className="flex justify-end">
          {deckShowing && (
            <div className="relative z-10 flex h-full w-[80%] items-center justify-center">
              <Deck />
              <Button arrow up onClick={() => scrollTo(0)}>
                Back to Top
              </Button>
            </div>
          )}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
