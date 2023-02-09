import React, { useState } from "react";
import MenuBottom from "../MenuButton/MenuBotton";
import styled from "./Menu.module.css";
import { motion } from "framer-motion";
import { PAGES } from "../../variable";
import { NavLink } from "react-router-dom";
import { useContextPages } from "../AnimationPages/ContextPages";
type Props = {};

const menuContainer = {
  init: {
    top: -3000,
  },
  anim: (custom: boolean) => ({
    top: custom ? 0 : -3000,
    transition: { duration: 0.5 },
  }),
};

const Menu = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { dataNavigation, setDirection } = useContextPages();
  return (
    <>
      <MenuBottom
        text={!open ? "open" : "close"}
        callback={() => {
          setOpen(!open);
        }}
      />
      <motion.nav
        variants={menuContainer}
        custom={open}
        initial="init"
        animate="anim"
        className={styled.wrap_menu}
      >
        <div className={styled.wrap_menu__container}>
          {PAGES.map(({ path, text, id }) => (
            <NavLink
              key={id}
              className="two_line"
              style={({ isActive }) =>
                isActive ? { color: "var(--base01)" } : {}
              }
              onClick={() => {
                if (dataNavigation && dataNavigation?.currentIndex !== id) {
                  setDirection(id > dataNavigation?.currentIndex ? 1 : -1);
                }
                setOpen(false);
              }}
              to={path}
            >
              {text()}
            </NavLink>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Menu;
