import React from "react";
import Button from "../Button";

interface AboutSectionProps {
  children?: React.ReactNode;
  handleClick?: () => void;
}

const index = ({ handleClick }: AboutSectionProps) => {
  return (
    <div className="relative z-10 flex h-full max-w-[80%] grow items-center justify-center">
      <div className="max-w-[70%] font-semibold 2xl:text-2xl">
        <h2 className="lg-:text-3xl my-10 text-xl font-bold">About Me</h2>
        <p className="">
          As a Full Stack developer, I love bringing ideas to life through the
          use of technology.
        </p>
        <p>
          Lately I&apos;ve been delving into the realm of animations and using
          them to make websites more interactive and fun.
        </p>
        <p>Explore some of my projects below!</p>
      </div>
      <Button arrow onClick={handleClick}>
        Explore Projects
      </Button>
    </div>
  );
};

export default index;
