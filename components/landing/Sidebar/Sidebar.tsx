import React from "react";
import { useHover } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import profileImage from "../../../public/alejandro-crop.jpg";
import { LayerProps } from "@/types";
import IconHandshake from "./svg/IconHandshake";
import IconHouse from "./svg/IconHouse";
import IconBinoculars from "./svg/IconBinoculars";
import styles from "./styles.module.css";

interface ItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Item = ({ children, onClick }: ItemProps) => (
  <span
    onClick={onClick}
    className={`${styles.box} mx-auto block cursor-pointer fill-blue stroke-blue px-2 py-1 after:shadow-sidebar`}
  >
    {children}
  </span>
);

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
        // boxShadow:
        //   "rgba(8, 126, 164, 0.25) 0px 54px 55px, rgba(8, 126, 164, 0.12) 0px -12px 30px, rgba(8, 126, 164, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        x,
      }}
      className={`${styles.sidebar} align-center fixed ml-[-10vw] flex 
        min-h-[100vh] w-full justify-center border-r-gray 
        bg-white pl-[10vw] align-middle font-semibold lg:text-2xl`}
    >
      <div className="align-center relative my-auto flex justify-center py-[20%]">
        <div className="text-center">
          <Image
            src={profileImage}
            alt=""
            className="mx-auto mb-[5vh] w-[50%] rounded-full"
            priority
          />
          <div className="flex justify-center">
            <div className="text-left">
              <Item onClick={() => onScroll && onScroll(0)}>
                <IconHouse className="mr-2 inline-block h-5 w-4" />
                Home
              </Item>
              <Item onClick={() => onScroll && onScroll(1)}>
                <IconHandshake className="mr-2 inline-block h-5 w-4" />
                About
              </Item>
              <Item onClick={() => onScroll && onScroll(2)}>
                <IconBinoculars className="mr-2 inline-block h-5 w-4 stroke-[]" />
                Explore
              </Item>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Sidebar;
