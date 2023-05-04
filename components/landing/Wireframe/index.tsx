import React, { useState, useRef, useLayoutEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import Image from "next/image";
import macImage from "../../../public/mac.png";
import wireframeImage from "../../../public/wireframe.png";

import Wireframe from "./Wireframe";

function StickySection() {
  const [{ opacity, y }, api] = useSpring(() => ({
    opacity: 0,
    y: 0,
  }));

  const gesture = useGesture({
    onScroll: (state) => {
      console.log("scroll");
    },
    onWheel: () => {
      console.log("scroll");
    },
  });

  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    setShow(window.scrollY > 1500);
    console.log("numbers", window.scrollY > 1500);
    console.log("show", show);
    api.start({
      opacity: window.scrollY > 1500 ? 1 : 0,
      y: window.scrollY > 1500 ? -200 : 0,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full pb-20" {...gesture()}>
      <animated.div
        className="sticky top-0 z-10 mx-auto w-full"
        style={{ opacity, y }}
      >
        <Image src={macImage} alt="" />
      </animated.div>
      <div
        ref={ref}
        className="mx-auto mb-8 mt-[-1200px] h-full w-[64%] overflow-y-auto rounded-2xl"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <Image src={wireframeImage} alt="" />
      </div>
    </section>
  );
}

export default Wireframe;
