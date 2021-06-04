import React from "react";
import Carousel from "../../Components/Navigation/Carousel/Carousel";
import useWindowDim from "../../hooks/useWindowDim";
import styles from "./MyProjects.module.css";
import ProjectItem from "./ProjectItem/ProjectItem";
import projects from "./projects";

function MyProjects(): JSX.Element {
  return (
    <div className={styles.wrapper} id="my-projects">
      <div className={styles.background} />
      <div className={styles.container}>
        <div className={styles.title}>Projects</div>
        <div className={styles.list_wrapper}>
          <div className={styles.list}>
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
