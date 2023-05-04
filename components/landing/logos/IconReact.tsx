import React from "react";

interface SvgProps {
  hovered?: boolean;
}

const IconReact = ({ hovered }: SvgProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.23174 23 20.46348"
      >
        <title>React JS</title>
        <circle cx="0" cy="0" r="2.05" fill={hovered ? "#61dafb" : "#000000"} />
        <g stroke={hovered ? "#61dafb" : "#000000"} strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    </>
  );
};

export default IconReact;
