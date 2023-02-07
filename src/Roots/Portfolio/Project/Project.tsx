import React from "react";
import styled from "./Project.module.css";
import { motion } from "framer-motion";
import Button from "../../../components/Button/Button";

type Props = {
  src: string;
  tools: string[];
  title: string;
  callback?: () => void;
};

const variant = {
  hov: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Project = ({ src, tools, title, callback }: Props) => {
  return (
    <motion.div whileHover="hov" className={styled.project}>
      <div className={styled.project_header}>
        <div className={styled.project_header__point}>
          <i></i>
        </div>
        {title}
      </div>
      <div className={styled.project_body}>
        <motion.div
          initial={{ opacity: 0, y: -600 }}
          className={styled.project_body_bg}
          variants={variant}
        >
          {tools.map((item) => (
            <Button text={item} />
          ))}
          <Button
            callbak={callback}
            style={{
              position: "absolute",
              bottom: 20,
              textTransform: "lowercase",
            }}
            text="more..."
          />
        </motion.div>
        <img src={src} alt="" />
      </div>
    </motion.div>
  );
};

export default Project;
