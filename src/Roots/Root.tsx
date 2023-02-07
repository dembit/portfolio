import React from "react";
import { Outlet } from "react-router-dom";
import LineAngel from "../components/LineAngel/LineAngel";
import AnimationPages from "../components/AnimationPages/AmimationPages";
import SwitchPages from "../components/SwithPages/SwitchPage";
import Menu from "../components/Menu/Menu";

type Props = {};

const Root = (props: Props) => {
  return (
    <>
      <Menu />
      <SwitchPages />
      <LineAngel />
      <AnimationPages>
        <Outlet />
      </AnimationPages>
    </>
  );
};

export default Root;
