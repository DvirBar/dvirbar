import React, { useContext, useRef } from "react";
import { CarouselItem } from "../Components/Navigation/PageCarousel/types";
import useElementReach from "../Components/Navigation/PageCarousel/useElementReach";
import useWindowDim from "../hooks/useWindowDim";
import { SiteContext } from "./context/SiteContext";
import SiteSectionMap from "./SiteSecitonMap";
import styles from "./SiteSections.module.css";
import { SelectItem } from "./types";

interface IProps {
  sectionItem: CarouselItem;
  index: number;
}

function SiteSectionItem({ sectionItem, index }: IProps): JSX.Element {
  const context = useContext(SiteContext);

  const ref = useRef<HTMLDivElement>(null);
  const onElementReach = () => {
    context?.selectItem(sectionItem.elementId, index);
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
