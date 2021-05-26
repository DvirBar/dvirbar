import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
}

function Card({ children }: IProps): JSX.Element {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
