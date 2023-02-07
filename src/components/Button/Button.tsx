import React from "react";
import styled from "./Button.module.css";
type Props = {
  text: string;
  style?: React.CSSProperties;
  callbak?: () => void;
};

const Button = ({ text, style, callbak }: Props) => {
  return (
    <div
      onClick={() => callbak && callbak()}
      style={style}
      className={[styled.button, "two_line"].join(" ")}
    >
      {text}
    </div>
  );
};

export default Button;
