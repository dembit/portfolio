import React from "react";
import { useTranslation } from "react-i18next";
import Typist from "react-typist";
import AnimateCanvas from "../../components/CrazyPoints/AnimateCanvas";

import styled from "./Base.module.css";

type Props = {};

const Base = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className={[styled.base, "container"].join(" ")}>
      <div style={{ position: "absolute", width: "100%", height: "100%" }}>
        {t("dima")}
        <AnimateCanvas />
      </div>
      <Typist avgTypingDelay={-1} className={styled.description}>
        <h1>Привет всем! Я Калиниченко Дмитрий</h1>
        <br />
        <div>
          Представляю вашему вниманию <h2>САЙТ ПОРТФОЛИО</h2>, который раскажет
          обо мне и моих способностях.
        </div>
        <br />
        <div>
          Как пример вы можете наблюдать <h2>КРУТУЮ АНИМАЦИЮ</h2> при
          перемещении курсора!!!
        </div>
        <br />
        <div>
          Она реализована мною с помощью <h2>React, Canvas и ООП Классы.</h2>
        </div>
        <br />
        <div>
          Код можно увидеть <h2>здесь!</h2>
        </div>
        <br />
        <div>
          Если вы дочитали до этого места то прошу <h2> более детально </h2>{" "}
          ознакомится со мной
        </div>
      </Typist>
    </div>
  );
};

export default Base;
