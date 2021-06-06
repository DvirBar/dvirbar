import jScript from "../../../assests/js.png";
import python from "../../../assests/python.png";
import typescript from "../../../assests/typescript.svg";
import CodeWindow from "../../../Components/Icons/CodeWindow";
import { Category } from "../types";
import { IconProps } from "../../../Components/Icons/icons";

const langList: Category = {
  name: "Languages",
  icon: (props: IconProps) => CodeWindow(props),
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
};

export default langList;
