import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Root from "./Roots/Root";
import { AnimatePresence } from "framer-motion";
import { PathEnum } from "./variable";
import Skill from "./Roots/Skill/Skill";
import Knowledge from "./Roots/Knowledge/Knowledge";
import Portfolio from "./Roots/Portfolio/Portfolio";
import About from "./Roots/About/About";
import Base from "./Roots/Base/Base";
import CanvasProject from "./Roots/Projects/Canvas/CanvasProject";
import Loading from "./components/Loading/Loading";
import PortfolioProject from "./Roots/Projects/PortfolioProject/PortfolioProject";

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={PathEnum.BASE} element={<Root />}>
            <Route path={PathEnum.BASE} element={<Base />} />
            <Route path={PathEnum.SKILL} element={<Skill />} />
            <Route path={PathEnum.KNOWLEDGE} element={<Knowledge />} />
            <Route path={PathEnum.PORTFOLIO} element={<Portfolio />} />
            <Route path={PathEnum.ABOUT} element={<About />} />
            <Route path={PathEnum.CANVAS} element={<CanvasProject />} />
            <Route
              path={PathEnum.PORTFOLIO_PROJECT}
              element={<PortfolioProject />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
