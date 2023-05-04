import React, { useState, useRef, useLayoutEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import macImage from "../../../public/mac-crop.png";
import wireframeImage from "../../../public/wireframe-crop.png";
import styles from "./design.module.css";

function StickySection() {
  const [{ opacity, marginBottom }, api] = useSpring(() => ({
    opacity: 0,
    marginBottom: 0,
  }));

  const [show, setShow] = useState(false);

  const handleScroll = () => {
    setShow(window.pageYOffset > 2200);
    console.log(show);
    api.start({
      opacity: 1,
      marginBottom: 150,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.design}>
      <Image className={styles.mac} src={macImage} alt="" loading="eager" />
      <Image
        className={styles.wireframe}
        src={wireframeImage}
        alt=""
        loading="eager"
      />
    </section>
  );
}

export default StickySection;
