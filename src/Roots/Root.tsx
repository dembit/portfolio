import React from "react";
import { Outlet } from "react-router-dom";
import LineAngel from "../components/LineAngel/LineAngel";
import AnimationPages from "../components/AnimationPages/AmimationPages";
import SwitchPages from "../components/SwithPages/SwitchPage";
import Menu from "../components/Menu/Menu";
import MenuLanguage from "../components/MenuLanguage/MenuLanguage";

type Props = {};

const Root = (props: Props) => {
  return (
    <>
      <Menu />
      <SwitchPages />
      <LineAngel />
      <MenuLanguage />
      <AnimationPages>
        <Outlet />
      </AnimationPages>
    </>
  );
};

export default Root;
