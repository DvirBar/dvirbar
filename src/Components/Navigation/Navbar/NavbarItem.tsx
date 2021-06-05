import React, { useEffect, useState } from "react";
import { NavItem, SelectedDims } from "./types";
import styles from "./Navbar.module.css";
import { SelectedItem } from "../../../Site/types";
import useWindowDim from "../../../hooks/useWindowDim";

interface IProps {
  navItem: NavItem;
  selectedItem: SelectedItem;
  selectDims: (dims: SelectedDims) => void;
  toggleLinks: (display: boolean) => void;
}

function NavbarItem({
  navItem,
  selectedItem,
  selectDims,
  toggleLinks,
}: IProps): JSX.Element {
  const isSelectedItem = selectedItem.elementId === navItem.elementId;
  const scrollToItem = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [ref, setRef] = useState<HTMLLIElement | null>(null);

  const { width } = useWindowDim();

  useEffect(() => {
    if (isSelectedItem) {
      selectDims({
        width: ref?.offsetWidth || 0,
        offset: ref?.offsetLeft || 0,
      });
    }
  }, [width, ref, isSelectedItem]);

  const handleClick = () => {
    toggleLinks(false);
    scrollToItem(navItem.elementId);
  };

  return (
    <li
      ref={(newRef) => setRef(newRef)}
      className={`${styles.navbar_item} ${
        isSelectedItem ? styles.item_selected : ""
      }`}
      onClick={() => handleClick()}
    >
      <div className={styles.item_text}>{navItem.label}</div>
    </li>
  );
}

export default React.memo(NavbarItem);
