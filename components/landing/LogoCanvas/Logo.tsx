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
  const [{ x, y, scale, opacity }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 0.4,
  }));
  const [hovered, setHover] = useState(false);

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ down, movement: [mx, my], offset: [ox, oy], event }) => {
      event.preventDefault();
      console.log(down, ox, oy, mx, my);
      api.start({
        x: down ? mx : 0,
        y: down ? my : 0,
      });
    }
  );

  const hover = useHover((state) => {
    setHover(state.hovering!);
    api.start({
      scale: hovered ? 1 : 1.5,
      opacity: hovered ? 0.4 : 1,
    });
  });

  return (
    <animated.div
      className={`${styles.logo} h-[75px] w-[75px] xl:h-[100px] xl:w-[100px]`}
      {...bind()}
      {...hover()}
      style={{
        x,
        y,
        marginLeft: initialX,
        marginTop: initialY,
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
