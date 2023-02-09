import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "./MenuLanguage.module.css";
import { motion } from "framer-motion";

type Props = {};

const Languages = ["ru", "en"];

const MenuLanguage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const onToggle = (event: any) => {
    event.preventDefault();
    setOpen(!open);
  };
  return (
    <motion.details
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className={styled.language}
      open={open}
      onClick={onToggle}
    >
      <summary>{i18n.resolvedLanguage}</summary>
      {Languages.map((item, i) => {
        if (item === i18n.resolvedLanguage) {
          return <div key={i}></div>;
        }
        return (
          <div
            key={i}
            onClick={() => {
              i18n.changeLanguage(item);
            }}
          >
            {item}
          </div>
        );
      })}
    </motion.details>
  );
};

export default MenuLanguage;
