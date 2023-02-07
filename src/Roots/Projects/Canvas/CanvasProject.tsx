import React from "react";
import AnimateCanvas from "../../../components/CrazyPoints/AnimateCanvas";
import styled from "./CanvasProject.module.css";

type Props = {};

const CanvasProject = (props: Props) => {
  return (
    <div className={styled.canvasProject} style={{ position: "relative" }}>
      <AnimateCanvas />
    </div>
  );
};

export default CanvasProject;
