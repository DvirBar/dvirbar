import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

function CardHeader({ children, className }: IProps): JSX.Element {
  return <div className={`${styles.card_header} ${className}`}>{children}</div>;
}

export default CardHeader;
