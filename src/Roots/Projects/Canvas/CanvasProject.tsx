import React from "react";
import styled from "./CanvasProject.module.css";
import canvasPng from "../../../img/canvas.png";
import { PathEnum } from "../../../variable";
import { NavLink } from "react-router-dom";

type Props = {};

const CanvasProject = (props: Props) => {
  return (
    <div className={[styled.canvasProject, "container"].join(" ")}>
      <h1>Crazy Points Canvas Project</h1>
      <div>
        <img src={canvasPng} alt="canvas project" />
      </div>
      <div>Component: React</div>
      <div>OOP: yes</div>
      <div>Classes: yes</div>
      <div>requestAnimationFrame: yes</div>
      <div>Animation: Canvas</div>
      <div>
        Details: Create classes Circle, Line, CrazyCircle and component
        AnimateCanvas
      </div>
      <div>
        <NavLink rel="noreferrer" target="_blank" to={PathEnum.CRAZY_POINTS}>
          Link Website
        </NavLink>
      </div>
      <div>
        <NavLink
          rel="noreferrer"
          target="_blank"
          to="https://github.com/dembit/portfolio/tree/main/src/components/CrazyPoints"
        >
          Git Code
        </NavLink>
      </div>
    </div>
  );
};

export default CanvasProject;
