import React from "react";
import styled from "./Loading.module.css";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styled.loading}>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
