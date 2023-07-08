export interface ExperienceData {
  id: number;
  key: string;
  title: string;
  role: string;
  date: string;
  stack: string;
}

const experienceData: ExperienceData[] = [
  {
    id: 1,
    key: "kenility",
    title: "Kenility",
    role: "fe",
    date: "nov. 2021 - actualidad",
    stack: "Typescript (React)",
  },
  {
    id: 2,
    key: "greenlight",
    title: "Greenlight",
    role: "ssfe",
    date: "dic. 2021 - jun. 2023",
    stack: "Typescript (React) - Node (Express)",
  },
  {
    id: 3,
    key: "mercadolibre",
    title: "MercadoLibre",
    role: "ssfe",
    date: "ago. 2020 - nov. 2021",
    stack: "Javascript (React) - Node (Express)",
  },
  {
    id: 4,
    key: "4rsoluciones",
    title: "4r Soluciones S.R.L.",
    role: "ssfs",
    date: "nov. 2019 - jun. 2020",
    stack: "Node.js (Express) - Javascript (Vue.js, React), SQL (MySQL)",
  },
  {
    id: 5,
    key: "innova4j",
    title: "Innova4J",
    role: "jrfs",
    date: "jun. 2019 - oct. 2019",
    stack: "Javascript (Vue.js) - Node.js (Express) - SQL (PostgreSQL)",
  },
  {
    id: 6,
    key: "proacce",
    title: "Pro-Acce c.a.",
    role: "jrfs",
    date: "mar. 2018 - sept. 2008",
    stack: "PHP (Laravel)",
  },
];

export default experienceData;
