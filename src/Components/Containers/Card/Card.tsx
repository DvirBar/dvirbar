import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
}

function Card({ children, className, width, height }: IProps): JSX.Element {
  return (
    <div className={`${styles.card} ${className}`} style={{ width, height }}>
      {children}
    </div>
  );
}

export default Card;
