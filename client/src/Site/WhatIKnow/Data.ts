import { Category } from "./types";
import htmlcss from "../../assests/htmlcss.png";
import mongo from "../../assests/mongodb.png";
import nodejs from "../../assests/nodejs.png";
import react from "../../assests/react.png";
import redux from "../../assests/redux.png";
import scss from "../../assests/scss.png";
import express from "../../assests/express.png";
import { IconProps } from "../../Components/Icons/icons";
import ColorPalette from "../../Components/Icons/ColorPalette";
import Database from "../../Components/Icons/Database";

const categories: Category[] = [
  {
    name: "Frontend",
    icon: (props: IconProps) => ColorPalette(props),
    technologies: [
      {
        name: "HTML & CSS",
        description:
          "Deep familiarity with <b>HTML and CSS</b> syntax, including fully responsive design without frameworks.",
        image: htmlcss,
      },
      {
        name: "SCSS",
        description: "Working exprience using basic features of <b>SCSS</b>.",
        image: scss,
      },
      {
        name: "React",
        description:
          "Deep understanding of <b>React</b> concepts and working experience using it to build large applications.",
        image: react,
      },
      {
        name: "Redux",
        description:
          "Using <b>Redux</b> to manage complex applcation state. Including using custom memoized selectors, and managing UI state to give live user feedback about asynchronous operations.",
        image: redux,
      },
    ],
  },
  {
    name: "Backend",
    icon: (props: IconProps) => Database(props),
    technologies: [
      {
        name: "NodeJS",
        description:
          "Able to use <b>Node</b> to build Javascript based server with the environment's best practices",
        image: nodejs,
      },
      {
        name: "Express",
        description: `Using <b>Express</b> to build scallable and maintainable API services
          with clear multi-layered interface based architecture.`,
        image: express,
      },
      {
        name: "MongoDB & Mongoose",
        description: `Planning and implementing NoSQL databases with <b>MongoDB</b>. Using the power 
          of <b>Mongoose</b>, to create a more reliable and easy to use data layer interface for
          the application.`,
        image: mongo,
      },
    ],
  },
];

export default categories;
