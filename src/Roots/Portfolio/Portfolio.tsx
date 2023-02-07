import React from "react";
import styled from "./Portfolio.module.css";
import Project from "./Project/Project";
import porfolioPng from "../../img/potfolio.png";
import chessPng from "../../img/chess.png";
import canvasPng from "../../img/canvas.png";
type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div className={[styled.portfolio, "container"].join(" ")}>
      <h1>Порфолио</h1>
      <div className={styled.portfolio_projects}>
        <Project
          title="Портфолио"
          tools={["HTML", "CSS", "React", "Motion", "Canvas"]}
          src={porfolioPng}
          callback={() => console.log(1)}
        />
        <Project
          title="Шахматы"
          tools={["HTML", "CSS", "React", "OOP"]}
          src={chessPng}
        />
        <Project
          title="Анимация фона: Сумашедшие точки"
          tools={["CANVAS", "REACT", "OOP"]}
          src={canvasPng}
        />
      </div>
    </div>
  );
};

export default Portfolio;
