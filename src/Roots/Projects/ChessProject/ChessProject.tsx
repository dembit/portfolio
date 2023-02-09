import React from "react";
import styled from "./ChessProject.module.css";
import chessPng from "../../../img/chess.png";
import { NavLink } from "react-router-dom";

type Props = {};

const ChessProject = (props: Props) => {
  return (
    <div className={[styled.chessProject, "container"].join(" ")}>
      <h1>
        Creating a chess game React <div>using OOP programming</div>{" "}
      </h1>
      <div>
        <img src={chessPng} alt="chess project" />
      </div>
      <div>Mobile Version: no</div>
      <div>Desktop Version: yes</div>
      <div>Platform: React</div>
      <div>Timer game: yes</div>
      <div>Players: 2 Players(black figure, white figure)</div>
      <div>Each player takes turns</div>
      <div>
        When a figure is selected, a hint is displayed showing where the figure
        can move
      </div>
      <div>
        The figure can capture another figure according to the rules of chess.
      </div>

      <div>
        <NavLink target="_blank" to={"https://dembit.github.io/chess/"}>
          Link Website
        </NavLink>
      </div>
      <div>
        <NavLink
          rel="noreferrer"
          target="_blank"
          to="https://github.com/dembit/chess"
        >
          Git Code
        </NavLink>
      </div>
    </div>
  );
};

export default ChessProject;
