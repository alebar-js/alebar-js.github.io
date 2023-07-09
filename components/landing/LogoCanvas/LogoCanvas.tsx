import React from "react";
import { logos } from "../constants";
import GreetingMessage from "../GreetingMessage";
import Logo from "./Logo";
import Button from "../Button";

interface LogoCanvasProps {
  children?: React.ReactNode;
  handleClick?: () => void;
}

const LogoCanvas = ({ children, handleClick }: LogoCanvasProps) => {
  return (
    <div className="relative z-10 ml-[20%] flex h-full grow items-center justify-center text-end">
      <div className="z-0">
        <GreetingMessage />
      </div>
      {logos.map(({ Img, position }, i) => {
        return (
          <Logo key={`logo-${i}`} initialX={position.x} initialY={position.y}>
            <Img />
          </Logo>
        );
      })}
      <Button className="text-xl font-semibold" arrow onClick={handleClick}>
        Learn More
      </Button>
    </div>
  );
};

export default LogoCanvas;
