import React from "react";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const classes = [
  "mt-4",
  "rounded-md",
  "border-[1px]",
  "border-[#30363d]",
  "bg-[#21262d]",
  "px-4",
  "py-[5px]",
  "font-semibold",
  "leading-5",
  "text-[#58a6ff]",
  "hover:bg-[#30363d]",
  "hover:text-[#58a6ff]",
  "active:text-white",
  "active:bg-[#0d419d]",
  "active:border-transparent",
  "relative inline-block align-middle ",
].join(" ");

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
