import { Project } from "./types";
import refuah from "../../assests/teasers/refuah.png";
import simEditor from "../../assests/teasers/sim-editor.png";
import dvirBar from "../../assests/teasers/dvirbar.png";

const projects: Project[] = [
  {
    name: "Refuah",
    description: "Website for Israeli med schools candidates",
    image: refuah,
    gitHub: "https://github.com/DvirBar/premed",
    link: "https://refuah.org.il/",
    theme: "#486974",
  },
  {
    name: "Sim Editor",
    description: "Psychometry test simulation files generator",
    image: simEditor,
    gitHub: "https://github.com/DvirBar/sim_editor",
    link: "https://sim-editor.herokuapp.com/",
    theme: "#4A90E2",
  },
  {
    name: "Sim Editor",
    description: "Psychometry test simulation files generator",
    image: dvirBar,
    gitHub: "https://github.com/DvirBar/sim_editor",
    link: "https://sim-editor.herokuapp.com/",
    theme: "#2ab8d1",
  },
];

export default projects;
