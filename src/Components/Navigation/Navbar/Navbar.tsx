import React, { useCallback, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";
import { NavItem, SelectedDims } from "./types";
import styles from "./Navbar.module.css";
import { SelectedItem } from "../../../Site/types";
import Button from "../../Inputs/Button/Button";
import ColorPicker from "./ColorPicker/ColorPicker";

interface IProps {
  navItems: NavItem[];
  selectedItem: SelectedItem;
}

function Navbar({ navItems, selectedItem }: IProps): JSX.Element {
  const [selectedDims, setSelectedDims] = useState<SelectedDims>();

  const indicatorStyle = {
    width: selectedDims?.width,
    left: selectedDims?.offset,
  };

  const selectDims = useCallback((dims: SelectedDims) => {
    setSelectedDims(dims);
  }, []);

  return (
    <nav className={styles.navbar}>
      <ColorPicker className={styles.side_wrapper} />
      <div className={styles.navbar_wrapper}>
        <ul className={styles.list}>
          {navItems.map((navItem) => (
            <NavbarItem
              key={navItem.elementId}
              navItem={navItem}
              selectedItem={selectedItem}
              selectDims={selectDims}
            />
          ))}
        </ul>
        <div style={indicatorStyle} className={styles.indicator} />
      </div>
      <div className={styles.side_wrapper}>
        <Button text="Resume" onClick={() => console.log("Clicked")} />
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
