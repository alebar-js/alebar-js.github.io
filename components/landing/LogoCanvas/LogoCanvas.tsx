import React, { useState, useRef } from "react";
import { logos } from "../constants";
import Logo from "./Logo";

interface LogoCanvasProps {
  children?: React.ReactNode;
}

const LogoCanvas = ({ children }: LogoCanvasProps) => {
  return (
    <div className="relative z-10 flex min-h-[100vh] grow items-center justify-center">
      <div className="z-0">{children}</div>
      {logos.map(({ Img, position }, i) => {
        return (
          <Logo initialX={position.x} initialY={position.y}>
            <Img />
          </Logo>
        );
      })}
    </div>
  );
};

export default LogoCanvas;
