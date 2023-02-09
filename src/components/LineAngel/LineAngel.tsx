import { motion } from "framer-motion";
import React from "react";
import styled from "./LineAngel.module.css";
type Props = {};

const LineAngel = (props: Props) => {
  return (
    <div className={styled.line}>
      <motion.a
        initial={{ rotate: "30deg", y: -54, background: "var(--base05)" }}
        whileHover={{
          background: "var(--base07)",
          transition: { duration: 0.5 },
        }}
        animate={{
          x: -120,
          y: 94,
          rotate: "45deg",
          opacity: [0, 1],
          transition: { delay: 1, duration: 0.5 },
        }}
      >
        Best Code
      </motion.a>
    </div>
  );
};

export default LineAngel;
