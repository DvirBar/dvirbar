import React, { useCallback, useState } from "react";
import NavbarItem from "./NavbarItem";
import { NavItem, SelectedDims } from "./types";
import styles from "./Navbar.module.css";
import { SelectedItem } from "../../../Site/types";

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
    </nav>
  );
}

export default React.memo(Navbar);
