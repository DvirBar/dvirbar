import React from "react";
import { Technology } from "../types";
import TechItem from "./TechItem/TechItem";
import styles from "./TechList.module.css";

interface IProps {
  technologies: Technology[];
}

function TechList({ technologies }: IProps): JSX.Element {
  return (
    <div className={styles.list}>
      {technologies.map((technology, index) => (
        <TechItem key={index} technology={technology} />
      ))}
    </div>
  );
}

export default TechList;
