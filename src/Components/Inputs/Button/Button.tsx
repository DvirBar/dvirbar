import React from "react";
import styles from "./Button.module.css";

interface IProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: IProps): JSX.Element {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
