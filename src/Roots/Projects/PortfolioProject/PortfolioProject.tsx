import React from "react";
import styled from "./PortfolioProject.module.css";
import porfolioPng from "../../../img/potfolio.png";

type Props = {};

const PortfolioProject = (props: Props) => {
  return (
    <div className={[styled.portfolioProject, "container"].join(" ")}>
      <h1>Portfolio Project</h1>
      <div>
        <img src={porfolioPng} alt="porfolio project" />
      </div>
      <div>Mobile Version: yes</div>
      <div>Desktop Version: yes</div>
      <div>Language: i18next(russian, english) </div>
      <div>Platform: React</div>
      <div>Suspence React: yes</div>
      <div>Animation: React motion framer</div>
      <div>Animation Routers: yes (use AnimatePresence)</div>
      <div>Module css: yes</div>
      <div>
        <a href="/">Link Website</a>
      </div>
      <div>
        <a href="/">Git Code</a>
      </div>
    </div>
  );
};

export default PortfolioProject;
