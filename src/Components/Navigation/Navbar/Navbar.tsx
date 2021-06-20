import React, { useCallback, useContext, useState } from "react";
import NavbarItem from "./NavbarItem";
import { NavItem, SelectedDims } from "./types";
import styles from "./Navbar.module.css";
import { SelectedItem } from "../../../Site/types";
import Button from "../../Inputs/Button/Button";
import ColorPicker from "./ColorPicker/ColorPicker";
import { ThemeContext } from "./ColorPicker/ThemeContext";
import More from "../../Icons/More";
import Close from "../../Icons/Close";

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

  const displayShadow = window.scrollY > 0;

  const [displayLinks, setDisplayLinks] = useState(false);

  const { selectedColor } = useContext(ThemeContext);

  return (
    <nav
      className={`${styles.navbar} ${
        displayShadow ? styles.navbar_shadow : ""
      }`}
    >
      <div
        className={`${styles.side_wrapper} ${styles.open_menu}`}
        onClick={() => setDisplayLinks(!displayLinks)}
      >
        {displayLinks ? (
          <Close width={35} height={20} color={selectedColor} />
        ) : (
          <More width={35} height={35} color={selectedColor} />
        )}
      </div>

      <ColorPicker className={styles.side_wrapper} />
      <div
        className={`${styles.navbar_wrapper} ${
          displayLinks ? styles.navbar_wrapper_display : ""
        }`}
      >
        <ul className={styles.list}>
          {navItems.map((navItem) => (
            <NavbarItem
              key={navItem.elementId}
              navItem={navItem}
              selectedItem={selectedItem}
              selectDims={selectDims}
              toggleLinks={setDisplayLinks}
            />
          ))}
        </ul>
        <div style={indicatorStyle} className={styles.indicator} />
      </div>
      <div className={styles.side_wrapper}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/11G3wMjtZX4p-QqeqKAyZphbm0VJjcx56/view?usp=sharing"
        >
          <Button text="Resume" />
        </a>
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
