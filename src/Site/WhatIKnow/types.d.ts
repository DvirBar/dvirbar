import { IconProps } from "../../Components/Icons/icons";

export interface Category {
  name: string;
  icon: (props: IconProps) => JSX.Element;
  technologies: Technology[];
}

export interface Technology {
  name: string;
  description?: string;
  image?: string;
}
