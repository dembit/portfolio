import React from "react";
import { motion } from "framer-motion";
import styled from "./AnimationPages.module.css";
import { useContextPages } from "./ContextPages";
type Props = {
  children: React.ReactNode;
};

const varAnimationPages = {
  init: (custom: number | null) => ({
    x: custom === -1 ? "100%" : custom === 1 ? "-100%" : "0px",
  }),
  anim: { x: "0px" },
  exit: (custom: number | null) => ({
    x: custom === -1 ? "-100%" : custom === 1 ? "100%" : "0px",
  }),
};

const AnimationPages = ({ children }: Props) => {
  const { direction } = useContextPages();

  return (
    <motion.div
      custom={direction}
      transition={{ duration: 0.5 }}
      exit="exit"
      initial="init"
      animate="anim"
      className={styled.animation}
      variants={varAnimationPages}
    >
      {children}
    </motion.div>
  );
};

export default AnimationPages;
