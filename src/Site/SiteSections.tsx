import React from "react";
import { carouselItems } from "./pageItems";
import SiteSectionItem from "./SiteSectionItem";
import styles from "./SiteSections.module.css";
import { SelectItem } from "./types";

interface IProps {
  selectItem: SelectItem;
}

function SiteSections({ selectItem }: IProps): JSX.Element {
  return (
    <div className={styles.sections}>
      {carouselItems.map((item, index) => (
        <SiteSectionItem
          key={item.elementId}
          sectionItem={item}
          selectItem={selectItem}
          index={index}
        />
      ))}
    </div>
  );
}

export default React.memo(SiteSections);
