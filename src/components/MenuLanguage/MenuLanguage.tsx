import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "./MenuLanguage.module.css";

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
    <details className={styled.language} open={open} onClick={onToggle}>
      <summary>{i18n.resolvedLanguage}</summary>
      {Languages.map((item, i) => (
        <div
          key={i}
          onClick={() => {
            i18n.changeLanguage(item);
          }}
        >
          {item}
        </div>
      ))}
    </details>
  );
};

export default MenuLanguage;
