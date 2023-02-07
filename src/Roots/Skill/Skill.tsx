import React from "react";
import styled from "./Skill.module.css";
import { motion } from "framer-motion";
import Company from "./Company/Company";
import { ArumtradeCompany, AustrimCompany } from "../../variable";
type Props = {};

const Skill = (props: Props) => {
  return (
    <motion.div layout className={[styled.skill, "container"].join(" ")}>
      <h1>Опыт</h1>
      <div style={{ marginBottom: 20 }}>
        Последние три года занимаюсь коммерческой разработкой на позиции
        Frontend разработчик React.
      </div>
      <Company
        name={AustrimCompany.name}
        style={{ marginBottom: 20 }}
        description={AustrimCompany.description}
      />
      <Company
        name={ArumtradeCompany.name}
        style={{ textAlign: "right" }}
        description={ArumtradeCompany.description}
      />
    </motion.div>
  );
};

export default Skill;
