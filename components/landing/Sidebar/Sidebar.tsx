import React from "react";
import { useHover } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import profileImage from "../../../public/alejandro-crop.jpg";
import { LayerProps } from "@/types";

const Sidebar = ({ onScroll }: LayerProps) => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useHover(({ hovering }) => {
    api.start({
      x: hovering ? 45 : 0,
    });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        x,
      }}
      className="fixed ml-[-10vw] flex min-h-[100vh] w-full justify-center border-r-gray bg-white pl-[10vw] align-middle"
    >
      <div className="flex justify-center py-[20%]">
        <div>
          <Image src={profileImage} alt="" className="h-40 w-40 rounded-full" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </animated.div>
  );
};

export default Sidebar;
