import React, { useState } from "react";
import Code from "../../../Components/Icons/Code";
import Globe from "../../../Components/Icons/Globe";
import { Project } from "../types";
import styles from "./ProjectItem.module.css";

interface IProps {
  project: Project;
}

function ProjectItem({ project }: IProps): JSX.Element {
  const projectStyle = {
    background: `url(${project.image}`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={styles.wrapper}>
      <div style={projectStyle} className={styles.project}>
        <div
          style={{ backgroundColor: project.theme }}
          className={styles.project_details}
        >
          <div className={styles.titles}>
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
          </div>
          <div className={styles.links}>
            <a
              href={project.link}
              target="_blank"
              className={styles.link_item}
              rel="noopener noreferrer"
            >
              <Globe height={35} width={35} color="#fff" />
              <div className={styles.link_item_text}>Live</div>
            </a>
            <a
              href={project.gitHub}
              target="_blank"
              className={styles.link_item}
              rel="noopener noreferrer"
            >
              <Code height={35} width={35} color="#fff" />
              <div className={styles.link_item_text}>Code</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
