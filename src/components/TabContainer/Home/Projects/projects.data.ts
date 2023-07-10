export interface ProjectData {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    name: "Types Doodler",
    description: "library",
    image: "https://place-hold.it/150x150",
    link: "https://enbermudez.github.io/types-doodler/",
  },
  {
    id: 2,
    name: "Poetry",
    description: "poemsSearch",
    image: "https://place-hold.it/150x150",
    link: "https://enbermudas.github.io/poetry/",
  },
  {
    id: 3,
    name: "Guess me",
    description: "minigame",
    image: "https://place-hold.it/150x150",
    link: "https://enbermudas.github.io/guessme/",
  },
  {
    id: 4,
    name: "Tetris",
    description: "minigame",
    image: "https://place-hold.it/150x150",
    link: "https://enbermudas.github.io/tetris/",
  },
];

export default projectsData;
