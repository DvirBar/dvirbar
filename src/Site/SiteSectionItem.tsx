import React, { useRef } from "react";
import { CarouselItem } from "../Components/Navigation/PageCarousel/types";
import useElementReach from "../Components/Navigation/PageCarousel/useElementReach";
import SiteSectionMap from "./SiteSecitonMap";
import { selectItem } from "./types";

interface IProps {
  sectionItem: CarouselItem;
  selectItem: selectItem;
}

function SiteSectionItem({ sectionItem, selectItem }: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const onElementReach = () => {
    selectItem(sectionItem.elementId);
  };

  useElementReach(ref, () => onElementReach());

  return (
    <div ref={ref}>
      <SiteSectionMap elementId={sectionItem.elementId} />
    </div>
  );
}

export default SiteSectionItem;
