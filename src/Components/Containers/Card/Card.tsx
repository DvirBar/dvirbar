import React from "react";
import styles from "./Card.module.css";

interface IProps {
  children: React.ReactNode;
  className?: string;
  width?: number;
  height?: number;
  horizontal?: boolean;
}

function Card({
  children,
  className,
  width,
  height,
  horizontal,
}: IProps): JSX.Element {
  return (
    <div
      className={`${styles.card} ${className} ${
        horizontal ? styles.horizontal : ""
      }`}
      style={{ width, height }}
    >
      {children}
    </div>
  );
}

export default Card;
