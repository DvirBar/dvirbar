import { IconProps } from "../../Components/Icons/icons";
import CleanCode from "./Illustrations/CleanCode";
import ComplexProblems from "./Illustrations/ComplexProblems";
import GreatUX from "./Illustrations/GreatUX";
import { Reason } from "./types";

export const reasons: Reason[] = [
  {
    reason: "Clean code",
    description: `I learned the hard way how code can quickly become 
      a god object that makes it challenging to find even the simplest bug. <br/><br/>
      I invest a lot of time and effort in devising my code structure so it could be
      easily tested and reused.`,
    icon: (props: IconProps): JSX.Element => CleanCode(props),
  },
  {
    reason: "Problem solving",
    description: `When I developed my projects I ran into some very interesting
    and challenging issues, including reusibillity and scalabillity, code efficiency, 
    and the way I access and handle my data. <br/><br/>
    Every problem can be devided into small pieces, 
    or be formulated as a simpler problem, which helps paving the way to a more general 
    and suitable solution. I use these mental models in order to solve the problems I run into.`,
    icon: (props: IconProps): JSX.Element => ComplexProblems(props),
  },
  {
    reason: "User experience",
    description: `As can be seen in my projects, I invested a lot of thought in 
    designing clear and easy to use user interfaces. <br/><br/>
    Should it be where things 
    are put on the screen, or how data is displayed and structured in various devices, 
    I design UIs that are practical but also simple and fun to use.`,
    icon: (props: IconProps): JSX.Element => GreatUX(props),
  },
];
