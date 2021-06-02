import React from "react";
import Carousel from "../../Components/Navigation/Carousel/Carousel";
import useWindowDim from "../../hooks/useWindowDim";
import styles from "./MyProjects.module.css";
import ProjectItem from "./ProjectItem/ProjectItem";
import projects from "./projects";

function MyProjects(): JSX.Element {
  const { width } = useWindowDim();

  let elementCount = 2;
  if (width <= 1200) {
    elementCount = 1;
  }

  return (
    <div className={styles.container} id="my-projects">
      <div className={styles.list}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
