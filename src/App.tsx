import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./Roots/Root";
import { AnimatePresence } from "framer-motion";
import { PathEnum } from "./variable";
import Skill from "./Roots/Skill/Skill";
import Knowledge from "./Roots/Knowledge/Knowledge";
import Portfolio from "./Roots/Portfolio/Portfolio";
import About from "./Roots/About/About";
import Base from "./Roots/Base/Base";
import CanvasProject from "./Roots/Projects/CanvasProject/CanvasProject";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={PathEnum.BASE} element={<Root />}>
          <Route path={PathEnum.BASE} element={<Base />} />
          <Route path={PathEnum.SKILL} element={<Skill />} />
          <Route path={PathEnum.KNOWLEDGE} element={<Knowledge />} />
          <Route path={PathEnum.PORTFOLIO} element={<Portfolio />} />
          <Route path={PathEnum.ABOUT} element={<About />} />
          <Route path={PathEnum.CANVAS} element={<CanvasProject />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
