import React from "react";

const Card = (props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) => {
  return (
    <div
      style={props.style}
      className={`rounded-lg border-[1px] border-[#30363d] bg-[#0d1117] ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
