import React from "react";
import styled from "./Skill.module.css";
import { motion } from "framer-motion";
import Company from "./Company/Company";
import { ArumtradeCompany, AustrimCompany } from "../../variable";
import { useTranslation } from "react-i18next";
type Props = {};

const Skill = (props: Props) => {
  const { t } = useTranslation();
  return (
    <motion.div layout className={[styled.skill, "container"].join(" ")}>
      <h1>{t("menu_experience")}</h1>
      <div style={{ marginBottom: 20 }}>{t("skills_0")}</div>
      <Company
        name={AustrimCompany.name}
        style={{ marginBottom: 20 }}
        description={AustrimCompany.description()}
      />
      <Company
        name={ArumtradeCompany.name}
        style={{ textAlign: "right" }}
        description={ArumtradeCompany.description()}
      />
    </motion.div>
  );
};

export default Skill;
