import { Project } from "./types";
import refuah from "../../assests/teasers/refuah.png";
import simEditor from "../../assests/teasers/sim-editor.png";

const projects: Project[] = [
  {
    name: "Refuah",
    description: "Website for Israeli med schools candidates",
    image: refuah,
    gitHub: "https://github.com/DvirBar/premed",
    link: "https://refuah.org.il/",
  },
  {
    name: "Sim Editor",
    description: "Psychometry test simulation files generator",
    image: simEditor,
    gitHub: "https://github.com/DvirBar/sim_editor",
    link: "https://sim-editor.herokuapp.com/",
  },
  {
    name: "Sim Editor",
    description: "Psychometry test simulation files generator",
    image: simEditor,
    gitHub: "https://github.com/DvirBar/sim_editor",
    link: "https://sim-editor.herokuapp.com/",
  },
];

export default projects;
