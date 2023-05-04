import React from "react";
import Image from "next/image";
import arrowDown from "../../../public/circle-arrow-down-solid.svg";

interface ButtonProps {
  arrow?: boolean;
  up?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ arrow, up, children, onClick }: ButtonProps) => {
  return (
    <button
      className="absolute bottom-5 z-10"
      onClick={() => onClick && onClick()}
    >
      {arrow && (
        <Image
          src={arrowDown}
          style={{ transform: up ? "rotate(180deg)" : "" }}
          alt=""
          width={24}
          height={24}
          className="mx-2 inline-block"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
