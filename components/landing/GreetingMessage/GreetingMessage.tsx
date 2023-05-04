import React from "react";
import Typewriter from "../Typewriter";

const GreetingMessage = () => {
  return (
    <div className="h-[152px] w-[502px] select-none rounded-[30px] border-[2px] border-gray p-8 text-left text-xl">
      <div>
        <span className="mr-6 font-bold text-[#808080]">01</span>
        <h2 className="inline font-bold">
          <Typewriter text="Hi, I'm " />
          <span className="text-blue">
            <Typewriter delay={225} text="<Alejandro />" />
          </span>
        </h2>
      </div>
      <div>
        <span className="mr-6 font-bold text-[#808080]">02</span>
        <h2 className="inline font-bold">
          <Typewriter text="I'm a " delay={550} />
          <span className="text-blue">
            <Typewriter delay={700} text="Software Developer " />
          </span>
          <Typewriter text="with a passion" delay={1350} />
        </h2>
      </div>
      <div>
        <span className="mr-6 font-bold text-[#808080]">03</span>
        <h2 className="inline font-bold">
          <Typewriter text="for Web Development," delay={1600} />{" "}
          <span className="text-blue">
            <Typewriter delay={2100} text="Full Stack!" />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default GreetingMessage;
