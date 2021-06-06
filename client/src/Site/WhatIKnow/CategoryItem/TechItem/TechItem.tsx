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
        className={styles.icon}
        src={technology.image}
        alt={technology.name}
      />
      {technology.description && (
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: technology.description }}
        />
      )}
    </div>
  );
}

export default TechItem;
