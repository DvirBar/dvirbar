import React from "react";
import { carouselItems } from "./pageItems";
import SiteSectionItem from "./SiteSectionItem";
import styles from "./SiteSections.module.css";

interface IProps {
  selectItem: (id: string) => void;
}

function SiteSections({ selectItem }: IProps): JSX.Element {
  return (
    <div className={styles.sections}>
      {carouselItems.map((item) => (
        <SiteSectionItem
          key={item.elementId}
          sectionItem={item}
          selectItem={selectItem}
        />
      ))}
    </div>
  );
}

export default SiteSections;
