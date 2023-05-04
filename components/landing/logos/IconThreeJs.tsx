import React from "react";

interface SvgProps {
  hovered?: boolean;
}

const styles = {
  st1: {
    fill: "#FFFFFF",
    stroke: "#000000",
    strokeWidth: 7,
    strokeMiterLimit: 10,
  },
  st2: {
    fill: "none",
    stroke: "#000000",
    strokeWidth: 7,
    strokeMiterLimit: 10,
  },
  st0: {
    fill: "#FFFFFF",
  },
};

const IconThreeJs = ({ hovered }: SvgProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 640 640"
      >
        <title>THREE JS</title>
        <polyline style={styles.st0} points="171.7,621.7 20,18.4 620,186.9 " />
        <g>
          <line
            style={styles.st1}
            x1="245.8"
            y1="362.4"
            x2="283.7"
            y2="513.3"
          />
          <line
            style={styles.st1}
            x1="395.5"
            y1="404.8"
            x2="245.8"
            y2="362.4"
          />
          <line
            style={styles.st1}
            x1="283.7"
            y1="513.3"
            x2="395.5"
            y2="404.8"
          />
          <path style={styles.st1} d="M134,470.9" />
          <line style={styles.st1} x1="283.7" y1="513.3" x2="134" y2="470.9" />
          <path style={styles.st1} d="M134,470.9" />
          <polyline
            style={styles.st2}
            points="134,470.9 171.9,621.9 283.7,513.3  "
          />
          <line style={styles.st1} x1="134" y1="470.9" x2="245.8" y2="362.4" />
          <line
            style={styles.st1}
            x1="245.8"
            y1="362.4"
            x2="357.7"
            y2="253.8"
          />
          <line
            style={styles.st1}
            x1="357.7"
            y1="253.8"
            x2="469.5"
            y2="145.3"
          />
          <line
            style={styles.st1}
            x1="319.8"
            y1="102.9"
            x2="357.7"
            y2="253.8"
          />
          <line
            style={styles.st1}
            x1="357.7"
            y1="253.8"
            x2="207.9"
            y2="211.5"
          />
          <line
            style={styles.st1}
            x1="207.9"
            y1="211.5"
            x2="245.8"
            y2="362.4"
          />
          <line style={styles.st1} x1="245.8" y1="362.4" x2="96.1" y2="320" />
          <line style={styles.st1} x1="96.1" y1="320" x2="134" y2="470.9" />
          <line style={styles.st1} x1="58.2" y1="169.1" x2="96.1" y2="320" />
          <line style={styles.st1} x1="207.9" y1="211.5" x2="58.2" y2="169.1" />
          <line style={styles.st1} x1="96.1" y1="320" x2="207.9" y2="211.5" />
          <line
            style={styles.st1}
            x1="207.9"
            y1="211.4"
            x2="319.8"
            y2="102.9"
          />
          <line style={styles.st1} x1="319.8" y1="102.9" x2="170" y2="60.5" />
          <line style={styles.st1} x1="170" y1="60.5" x2="207.9" y2="211.4" />
          <polyline
            style={styles.st2}
            points="58.2,169.1 20.3,18.1 170,60.5  "
          />
          <line style={styles.st1} x1="58.2" y1="169.1" x2="170" y2="60.5" />
          <polyline
            style={styles.st2}
            points="507.4,296.2 619.2,187.7 469.5,145.3  "
          />
          <line
            style={styles.st1}
            x1="469.5"
            y1="145.3"
            x2="507.4"
            y2="296.2"
          />
          <line
            style={styles.st1}
            x1="507.4"
            y1="296.2"
            x2="357.7"
            y2="253.8"
          />
          <line
            style={styles.st1}
            x1="357.7"
            y1="253.8"
            x2="395.5"
            y2="404.8"
          />
          <line
            style={styles.st1}
            x1="395.5"
            y1="404.8"
            x2="507.4"
            y2="296.2"
          />
          <line
            style={styles.st1}
            x1="469.5"
            y1="145.3"
            x2="319.8"
            y2="102.9"
          />
        </g>
      </svg>
    </>
  );
};

export default IconThreeJs;
