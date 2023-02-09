import React from "react";
import styled from "./About.module.css";
import avatarImg from "../../img/avatar.jpg";
import { useTranslation } from "react-i18next";
type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className={[styled.about, "container"].join(" ")}>
      <h1>{t("menu_about")}</h1>
      <div className={styled.about_content}>
        <div className={styled.about_content__img}>
          <img src={avatarImg} alt="" />
        </div>
        <div>
          {t("about_0")}
          <div>{t("about_1")}</div>
          <div>{t("about_2")}</div>
          <div>{t("about_3")}</div>
          <div>
            <a href="https://telegram.me/dembit">Telegram</a>
          </div>
          <div>
            <a href="https://wa.me/+79002302877">WhatsApp</a>
          </div>
          <div>
            <a href="mailto:dembit1991@gmail.com">
              Gmail: dembit1991@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
