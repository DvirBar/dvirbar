import React from "react";
import styles from "./Button.module.css";

interface IProps {
  text: string;
  className?: string;
  onClick: () => void;
}

function Button({ text, className, onClick }: IProps): JSX.Element {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
