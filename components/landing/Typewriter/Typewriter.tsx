import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
  typing?: boolean;
}

const Typewriter: React.FC<TypewriterProps> = ({
  style,
  text,
  typing = false,
  delay,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [showTypingIndicator, setShowTypingIndicator] = useState(true);

  const currentText = text.slice(0, textIndex);

  const containerVariants = {
    start: { transition: { staggerChildren: 0.05 } },
    end: { transition: { staggerChildren: 0.05 } },
  };

  const letterVariants = {
    start: { opacity: 0 },
    end: { opacity: 1 },
  };

  const letterTransition = {
    duration: 0.3,
    ease: [0.04, 0.62, 0.23, 0.98],
  };

  useEffect(() => {
    const timeout = () =>
      setTimeout(() => {
        if (textIndex < text.length) {
          setTextIndex(textIndex + 1);
        } else {
          setShowTypingIndicator(!showTypingIndicator);
        }
      }, 25);
    delay && textIndex == 0 ? setTimeout(timeout, delay) : timeout();
  }, [textIndex, text.length, showTypingIndicator]);

  const letters = currentText.split("");

  return (
    <motion.span variants={containerVariants} initial="start" animate="end">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          transition={letterTransition}
          style={style}
        >
          {letter}
        </motion.span>
      ))}
      {typing && showTypingIndicator && (
        <motion.span
          style={{ display: "inline-block", marginLeft: "0.1em", ...style }}
          animate={{ opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatType: "reverse",
          }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default Typewriter;
