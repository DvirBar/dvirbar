import React from "react";
import { carouselItems } from "./pageItems";
import SiteSectionItem from "./SiteSectionItem";
import styles from "./SiteSections.module.css";

function SiteSections(): JSX.Element {
  return (
    <div className={styles.sections}>
      {carouselItems.map((item, index) => (
        <SiteSectionItem
          key={item.elementId}
          sectionItem={item}
          index={index}
        />
      ))}
    </div>
  );
}

export default React.memo(SiteSections);
