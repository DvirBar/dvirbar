import { IconProps } from "../../Components/Icons/icons";

export interface Reason {
  reason: string;
  description: string;
  icon: (props: IconProps) => JSX.Element;
}
