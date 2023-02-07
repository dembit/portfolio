export enum PathEnum {
  BASE = "/",
  SKILL = "/skill",
  KNOWLEDGE = "/knowledge",
  PORTFOLIO = "/portfolio",
  ABOUT = "/about",
  CANVAS = "/projects/canvas",
}

export const PAGES = [
  { id: 0, text: "Основная", path: PathEnum.BASE },
  { id: 1, text: "Знания", path: PathEnum.KNOWLEDGE },
  { id: 2, text: "Опыт", path: PathEnum.SKILL },
  { id: 3, text: "Портфолио", path: PathEnum.PORTFOLIO },
  { id: 4, text: "Обо мне", path: PathEnum.ABOUT },
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
  description: [
    "Февраль 2020 - Март2021",
    "Frontend разработчик React",
    "Проект был связан с валютами!",
    "Отрисовка графиков(Chartjs)",
    "RestApi",
    "Websoket",
    "Redux",
  ],
};

export const AustrimCompany = {
  name: "Austrim",
  description: [
    "Март 2021 - Декабрь 2022",
    "Frontend разработчик React",
    "Ежедневные митинги(постановка задач) (Jira, JetBrains Space )",
    "Код ревью",
    "Работа с gitlab (как без него)))",
    "Работа с бекендом REST API (получение и отображение на веб странице)",
    "Работа с компонентами.",
    "Оптимизация кода",
    "Добавление новых фитч.",
  ],
};

export type PageType = typeof PAGES[0];
