export interface ExperienceData {
  id: number;
  key: string;
  title: string;
  role: string;
  date: string;
  stack: string;
  link: string;
}

const experienceData: ExperienceData[] = [
  {
    id: 1,
    key: "kenility",
    title: "Kenility",
    role: "fe",
    date: "date1",
    stack: "Typescript (React)",
    link: "https://www.linkedin.com/company/kenility/",
  },
  {
    id: 2,
    key: "greenlight",
    title: "Greenlight",
    role: "ssfe",
    date: "date2",
    stack: "Typescript (React) - Node (Express)",
    link: "https://www.linkedin.com/company/greenlightcard/",
  },
  {
    id: 3,
    key: "mercadolibre",
    title: "MercadoLibre",
    role: "ssfe",
    date: "date3",
    stack: "Javascript (React) - Node (Express)",
    link: "https://www.linkedin.com/company/mercadolibre/",
  },
  {
    id: 4,
    key: "4rsoluciones",
    title: "4r Soluciones S.R.L.",
    role: "ssfs",
    date: "date4",
    stack: "Node.js (Express) - Javascript (Vue.js, React), SQL (MySQL)",
    link: "https://www.linkedin.com/company/crombie/",
  },
  {
    id: 5,
    key: "innova4j",
    title: "Innova4J",
    role: "jrfs",
    date: "date5",
    stack: "Javascript (Vue.js) - Node.js (Express) - SQL (PostgreSQL)",
    link: "https://www.linkedin.com/company/innova4j/",
  },
  {
    id: 6,
    key: "proacce",
    title: "Pro-Acce c.a.",
    role: "jrfs",
    date: "date6",
    stack: "PHP (Laravel)",
    link: "https://www.linkedin.com/company/pro-acce/",
  },
];

export default experienceData;
