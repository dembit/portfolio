import React from "react";
import styled from "./MenuButton.module.css";
import { motion } from "framer-motion";
type Props = {
  callback: () => void;
  text: string;
};

const container = {
  animate: {
    x: [200, 0],
    transition: { staggerChildren: 0.1, delayChildren: 1, delay: 1 },
  },
};

const item = {
  initial: { x: 200, margin: 8 },
  animate: {
    x: 0,
    transition: { duration: 0.5 },
  },
  hover: { margin: 10 },
  tap: { margin: 2, y: 15 },
};

const itemText = {
  hover: { opacity: 1, right: 70, transition: { duration: 0.5 } },
};

const MenuBottom = ({ callback, text }: Props) => {
  return (
    <motion.div
      onClick={callback}
      variants={container}
      whileTap="tap"
      whileHover="hover"
      initial="initial"
      animate="animate"
      className={styled.menuButton}
    >
      <motion.i variants={item}></motion.i>
      <motion.i variants={item}></motion.i>
      <motion.i variants={item}></motion.i>
      <motion.div variants={itemText} className={styled.menuButton_text}>
        {text}
      </motion.div>
    </motion.div>
  );
};

export default MenuBottom;
