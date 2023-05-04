import React, { useState } from "react";
import { useDrag, useHover } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./logo.module.css";

interface LogoProps {
  initialX: number | string;
  initialY: number | string;
  children?: React.ReactNode;
}

const Logo = ({ initialX, initialY, children }: LogoProps) => {
  const [{ x, y, height, width, scale, opacity }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    height: 75,
    width: 75,
    scale: 1,
    opacity: 0.4,
  }));
  const [hovered, setHover] = useState(false);

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, offset: [ox, oy], event }) => {
    event.preventDefault();
    api.set({
      x: ox,
      y: oy,
    });
  });

  const hover = useHover((state) => {
    setHover(state.hovering!);
    api.start({
      scale: hovered ? 1 : 1.5,
      opacity: hovered ? 0.4 : 1,
    });
  });

  return (
    <animated.div
      className={styles.card}
      {...bind()}
      {...hover()}
      style={{
        x,
        y,
        marginLeft: initialX,
        marginTop: initialY,
        height,
        width,
        opacity,
        scale,
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { hovered } as { hovered: boolean });
        }
        return child;
      })}
    </animated.div>
  );
};

export default Logo;
