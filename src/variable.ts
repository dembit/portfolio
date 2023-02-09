import { t } from "i18next";

export enum PathEnum {
  BASE = "/",
  SKILL = "/skill",
  KNOWLEDGE = "/knowledge",
  PORTFOLIO = "/portfolio",
  ABOUT = "/about",
  CANVAS = "/projects/canvas",
}

export const PAGES = [
  { id: 0, text: () => t("menu_base"), path: PathEnum.BASE },
  { id: 1, text: () => t("menu_knowledge"), path: PathEnum.KNOWLEDGE },
  { id: 2, text: () => t("menu_experience"), path: PathEnum.SKILL },
  { id: 3, text: () => t("menu_portfolio"), path: PathEnum.PORTFOLIO },
  { id: 4, text: () => t("menu_about"), path: PathEnum.ABOUT },
];

export const listKnowledge = [
  { id: 1, name: "HTML", percent: "95%" },
  { id: 2, name: "CSS", percent: "96%" },
  { id: 3, name: "Javascript", percent: "94%" },
  { id: 4, name: "React", percent: "93%" },
  { id: 5, name: "ReduxToolkit", percent: "80%" },
  { id: 6, name: "Typescript", percent: "85%" },
  { id: 7, name: "MotionFramer", percent: "85%" },
  { id: 8, name: "OOP", percent: "87%" },
  { id: 9, name: "Next", percent: "60%" },
  { id: 10, name: "NodeJs", percent: "40%" },
  { id: 11, name: "Docker", percent: "10%" },
  { id: 12, name: "CI/CD", percent: "11%" },
];

export const listButtonKnowledge = [
  { id: 1, text: "Websoket" },
  { id: 2, text: "Git" },
  { id: 3, text: "SCSS" },
  { id: 4, text: "RestAPI" },
  { id: 5, text: "StyleComponent" },
  { id: 6, text: "Hooks" },
  { id: 7, text: "Cookies" },
  { id: 8, text: "MaterialUI" },
  { id: 9, text: "Token" },
  { id: 10, text: "Figma" },
  { id: 11, text: "SOLID" },
  { id: 12, text: "DRY" },
  { id: 13, text: "KISS" },
  { id: 14, text: "YAGNI" },
];

export const ArumtradeCompany = {
  name: "Arumtrade",
  description: () => [
    t("arumtrade_0"),
    t("arumtrade_1"),
    t("arumtrade_2"),
    t("arumtrade_3"),
    "RestApi",
    "Websoket",
    "Redux",
  ],
};

export const AustrimCompany = {
  name: "Austrim",
  description: () => [
    t("austrim_0"),
    t("austrim_1"),
    t("austrim_2"),
    t("austrim_3"),
    t("austrim_4"),
    t("austrim_5"),
    t("austrim_6"),
    t("austrim_7"),
    t("austrim_8"),
  ],
};

export type PageType = typeof PAGES[0];
