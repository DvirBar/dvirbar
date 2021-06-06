import React, { useContext, useRef } from "react";
import { NavItem } from "../Components/Navigation/Navbar/types";
import useElementReach from "../Components/Navigation/Navbar/useElementReach";
import { SiteContext } from "./context/SiteContext";
import SiteSectionMap from "./SiteSecitonMap";
import styles from "./SiteSections.module.css";

interface IProps {
  sectionItem: NavItem;
  index: number;
  width: number;
  height: number;
}

function SiteSectionItem({
  sectionItem,
  index,
  width,
  height,
}: IProps): JSX.Element {
  const context = useContext(SiteContext);

  const ref = useRef<HTMLDivElement>(null);
  const onElementReach = () => {
    context?.selectItem(sectionItem.elementId, index);
  };

  useElementReach(ref, () => onElementReach());

  return (
    <div
      ref={ref}
      style={{ minHeight: height, width }}
      className={styles.section_wrapper}
    >
      <SiteSectionMap elementId={sectionItem.elementId} />
    </div>
  );
}

export default SiteSectionItem;
