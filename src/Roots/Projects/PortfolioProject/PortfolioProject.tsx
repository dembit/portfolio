import React from "react";
import styled from "./PortfolioProject.module.css";
import porfolioPng from "../../../img/potfolio.png";
import { NavLink } from "react-router-dom";
import { PathEnum } from "../../../variable";

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
        <NavLink target="_blank" to={PathEnum.BASE}>
          Link Website
        </NavLink>
      </div>
      <div>
        <NavLink
          rel="noreferrer"
          target="_blank"
          to="https://github.com/dembit/portfolio/tree/main"
        >
          Git Code
        </NavLink>
      </div>
    </div>
  );
};

export default PortfolioProject;
