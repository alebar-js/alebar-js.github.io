import React from "react";
import styles from "./styles.module.css";
import { ParallaxLayer, IParallaxLayer } from "@react-spring/parallax";

const Triangle = () => {
  return (
    <ParallaxLayer offset={1}>
      <div className={styles.container}>
        <div className={styles.triangle}></div>
      </div>
    </ParallaxLayer>
  );
};

export default Triangle;
