import React, { useRef } from "react";
import { CarouselItem } from "../Components/Navigation/PageCarousel/types";
import useElementReach from "../Components/Navigation/PageCarousel/useElementReach";
import useWindowDim from "../hooks/useWindowDim";
import SiteSectionMap from "./SiteSecitonMap";
import styles from "./SiteSections.module.css";
import { SelectItem } from "./types";

interface IProps {
  sectionItem: CarouselItem;
  selectItem: SelectItem;
  index: number;
}

function SiteSectionItem({
  sectionItem,
  selectItem,
  index,
}: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const onElementReach = () => {
    selectItem(sectionItem.elementId, index);
  };

  useElementReach(ref, () => onElementReach());

  const { height, width } = useWindowDim();

  return (
    <div ref={ref} style={{ height, width }} className={styles.section_wrapper}>
      <SiteSectionMap elementId={sectionItem.elementId} />
    </div>
  );
}

export default SiteSectionItem;
