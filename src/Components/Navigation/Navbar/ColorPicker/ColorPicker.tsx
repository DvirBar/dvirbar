import React, { useContext, useRef, useState } from "react";
import colorMap from "./colors.json";
import { ThemeContext } from "./ThemeContext";
import styles from "./ColorPicker.module.css";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

interface IProps {
  className: string;
}

function ColorPicker({ className }: IProps): JSX.Element {
  const { selectedColor, selectColor } = useContext(ThemeContext);
  const [display, setDisplay] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, display, () => setDisplay(false));

  return (
    <div ref={ref} className={`container ${className}`}>
      <div className={styles.theme}>
        <span className={styles.theme_label}>Theme:</span>
        <span
          onClick={() => setDisplay(!display)}
          className={styles.selected_color}
          style={{ backgroundColor: selectedColor }}
        />
      </div>
      <div
        className={`${styles.select_color} ${
          display ? styles.select_color_display : ""
        }`}
      >
        {colorMap.colors.map((color, index) => (
          <div
            onClick={() => selectColor && selectColor(color)}
            key={index}
            className={`${styles.color_option_wrapper} ${
              selectedColor === color
                ? styles.color_option_wrapper_selected
                : ""
            }`}
          >
            <div
              className={styles.color_option}
              style={{ backgroundColor: color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
