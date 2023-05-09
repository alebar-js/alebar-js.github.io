import React from "react";
import Image from "next/image";
import arrowDown from "../../../public/circle-arrow-down-solid.svg";
import { FaArrowCircleDown, FaCalculator } from "react-icons/fa";

interface ButtonProps {
  arrow?: boolean;
  up?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const Button = ({
  arrow,
  up,
  children,
  onClick,
  className,
  style,
}: ButtonProps) => {
  return (
    <button
      className={`${className} absolute bottom-5 z-10`}
      style={style}
      onClick={() => onClick && onClick()}
    >
      {arrow && (
        // <Image
        //   src={arrowDown}
        //   style={{ transform: up ? "rotate(180deg)" : "" }}
        //   alt=""
        //   width={36}
        //   height={36}
        //   className="mx-2 inline-block fill-blue stroke-blue"
        // />
        <FaArrowCircleDown className="fill-blue h-9 w-9 mx-2 inline-block " />
      )}
      {children}
    </button>
  );
};

export default Button;
