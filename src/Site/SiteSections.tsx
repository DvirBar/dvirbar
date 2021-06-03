import React from "react";
import useWindowDim from "../hooks/useWindowDim";
import { navItems } from "./pageItems";
import SiteSectionItem from "./SiteSectionItem";
import styles from "./SiteSections.module.css";

function SiteSections(): JSX.Element {
  const { height, width } = useWindowDim();

  return (
    <div className={styles.sections}>
      {navItems.map((item, index) => (
        <SiteSectionItem
          key={item.elementId}
          sectionItem={item}
          index={index}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
}

export default React.memo(SiteSections);
