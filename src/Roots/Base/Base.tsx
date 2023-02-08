import React from "react";
import { Trans, useTranslation } from "react-i18next";
import AnimateCanvas from "../../components/CrazyPoints/AnimateCanvas";
import { motion } from "framer-motion";

import styled from "./Base.module.css";

type Props = {};

const Base = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div className={[styled.base, "container"].join(" ")}>
      <div className={styled.base_canvas}>
        <AnimateCanvas />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className={[styled.description, "container"].join(" ")}
      >
        <h1>{t("greetings_1")}</h1>
        <div>
          <Trans i18nKey="greetings_2">
            Представляю вашему вниманию <h2>САЙТ ПОРТФОЛИО</h2>, который
            раскажет обо мне и моих способностях.
          </Trans>
        </div>
        <div>
          <Trans i18nKey="greetings_3">
            Как пример вы можете наблюдать <h2>КРУТУЮ АНИМАЦИЮ</h2> при
            перемещении курсора!!!
          </Trans>
        </div>
        <div>
          <Trans i18nKey="greetings_4">
            Она реализована мною с помощью <h2>React, Canvas и ООП Классы.</h2>
          </Trans>
        </div>
        <br />
        <div>
          <Trans i18nKey="greetings_5">
            Код можно увидеть <h2>здесь!</h2>
          </Trans>
        </div>
        <div>
          <Trans i18nKey="greetings_6">
            Если вы дочитали до этого места то прошу <h2> более детально </h2>
            ознакомится со мной
          </Trans>
        </div>
      </motion.div>
    </div>
  );
};

export default Base;
