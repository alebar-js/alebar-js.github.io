import React, { ReactNode } from "react";
import styles from "./Sidebar.module.css";

interface Props {
  children?: ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{ borderRight: "1px solid #30363d" }}
      className="block bg-[#0d1117] text-white sm:min-w-[33vw] sm:p-6 lg:min-w-[25vw] lg:p-8 xl:min-w-[20vw]"
    >
      {children}
    </div>
  );
};

export default Sidebar;
