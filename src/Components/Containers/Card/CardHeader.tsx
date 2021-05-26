import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
}

function CardHeader({ children }: IProps): JSX.Element {
  return <div className={styles.card_header}>{children}</div>;
}

export default CardHeader;
