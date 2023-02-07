import React from "react";
import styled from "./KnowledgeItem.module.css";
import { motion } from "framer-motion";

type Props = {
  text: string;
  percent: string;
  style?: React.CSSProperties;
};

const KnowledgeItem = ({ text, percent, style }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={style}
      className={styled.item}
    >
      <div className={styled.item_text}>
        <span>{text}</span>
      </div>
      <motion.div
        style={{ width: percent }}
        initial={{ width: 0 }}
        animate={{ width: percent }}
        transition={{ duration: 1 }}
        className={styled.item_bg}
      ></motion.div>
      <em className={styled.item_precent}>{percent}</em>
    </motion.div>
  );
};

export default KnowledgeItem;
