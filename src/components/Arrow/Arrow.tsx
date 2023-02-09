import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Arrow.module.css";

export type arrowType = "left" | "right";

type Props = {
  text: () => string;
  path: string;
  type: arrowType;
  callback: () => void;
};

const classesOfType: Record<arrowType, string> = {
  left: "arrow_left",
  right: "arrow_right",
};

const arrowVariants = {
  hover: (custom: string) => ({
    opacity: 1,
    x: custom === "left" ? 160 : -160,
    transition: { duration: 0.5 },
  }),
};

const Arrow = ({ text, path, type, callback }: Props) => {
  const animateMoveArrow = type === "left" ? [-300, 0] : [300, 0];
  return (
    <motion.div
      animate={{ x: animateMoveArrow, transition: { duration: 0.5, delay: 1 } }}
      whileHover="hover"
      className={[styled.arrow, styled[classesOfType[type]]].join(" ")}
      onClick={() => callback()}
    >
      <NavLink className={styled.arrow_link} to={path}>
        <div className={styled.arrow_link__arrow}>
          <motion.span custom={type} variants={arrowVariants}>
            {text()}
          </motion.span>
        </div>
      </NavLink>
    </motion.div>
  );
};

export default Arrow;
