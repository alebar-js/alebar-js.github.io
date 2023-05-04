import React from "react";
import styles from "./styles.module.css";

const Tooltip = () => {
  return (
    <div
      id={styles.tooltip}
      className={Object.keys(classNames).join(" ")}
      style={style}
    >
      <div className="tooltip-arrow"></div>
      <div className="tooltip-inner">ToolTip Component</div>
    </div>
  );
};

export default Tooltip;
