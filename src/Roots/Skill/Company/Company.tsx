import React from "react";
import styled from "./Company.module.css";

type Props = {
  name: string;
  description: string[];
  style?: React.CSSProperties;
};

const Company = ({ name, description, style }: Props) => {
  return (
    <div style={style} className={[styled.company, "two_line"].join(" ")}>
      <h2>{name}</h2>
      <div>
        {description.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Company;
