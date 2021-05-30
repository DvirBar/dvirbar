import { Category } from "./types";
import htmlcss from "../../assests/htmlcss.png";
import jScript from "../../assests/js.png";
import mongo from "../../assests/mongodb.png";
import nodejs from "../../assests/nodejs.png";
import python from "../../assests/python.png";
import react from "../../assests/react.png";
import redux from "../../assests/redux.png";
import scss from "../../assests/scss.png";
import typescript from "../../assests/typescript.svg";
import express from "../../assests/express.png";

const categories: Category[] = [
  {
    name: "Languages and Supersets",
    technologies: [
      {
        name: "Javascript",
        image: jScript,
      },
      {
        name: "Typescript",
        image: typescript,
      },
      {
        name: "Python",
        image: python,
      },
    ],
  },
  {
    name: "Frontend",
    technologies: [
      {
        name: "HTML & CSS",
        description:
          "Deep familiarity with HTML and CSS syntax, including fully responsive design without frameworks. I am able to see or get a description of a design and replicate it in HTML and CSS.",
        image: htmlcss,
      },
      {
        name: "SCSS",
        description: "Working exprience using basic features of SCSS.",
        image: scss,
      },
      {
        name: "React",
        description:
          "Deep understanding of React concepts and working experience using it to build large applications.",
        image: react,
      },
      {
        name: "Redux",
        description:
          "Using Redux to manage complex applcation state. Including using custom memoized selectors, and managing UI state to give live user feedback about asynchronous operations.",
        image: redux,
      },
    ],
  },
  {
    name: "Backend",
    technologies: [
      {
        name: "NodeJS",
        image: nodejs,
      },
      {
        name: "Express",
        image: express,
      },
      {
        name: "MongoDB & Mongoose",
        description:
          "Planning and implementing NoSQL databases with MongoDB. Using the power of Mongoose, such as middlewares, plugins, data validation, virtuals and static methods, to create a more reliable and easy to use data layer interface for the application.",
        image: mongo,
      },
    ],
  },
];

export default categories;
