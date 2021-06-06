import React from "react";
import useWindowDim from "../../../hooks/useWindowDim";
import CategoryCard from "../CategoryCard/CategoryCard";
import langList from "./langList";
import styles from "./Languages.module.css";

function Languages(): JSX.Element {
  const { width } = useWindowDim();

  const horizontal = width >= 620;

  return (
    <div className={styles.wrapper}>
      <CategoryCard category={langList} horizontal={horizontal}>
        <div className={styles.list}>
          {langList.technologies.map((technology, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.image_container}>
                <img className={styles.image} src={technology.image} />
              </div>
              <div className={styles.lang_name}>{technology.name}</div>
            </div>
          ))}
        </div>
      </CategoryCard>
    </div>
  );
}

export default Languages;
