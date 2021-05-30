import React from "react";
import { Technology } from "../../types";
import styles from "./TechItem.module.css";

interface IProps {
  technology: Technology;
}

function TechItem({ technology }: IProps): JSX.Element {
  return (
    <div className={styles.item}>
      <img
        className={styles.item_icon}
        src={technology.image}
        alt={technology.name}
      />
      <div className={styles.item_text}>{technology.name}</div>
    </div>
  );
}

export default TechItem;
