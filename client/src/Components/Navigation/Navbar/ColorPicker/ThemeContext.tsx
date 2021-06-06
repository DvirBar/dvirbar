import React, { createContext, useState } from "react";
import { SelectColor } from "./types";
import colorMap from "./colors.json";

interface ContextProps {
  selectColor: SelectColor;
  selectedColor: string;
}

export const ThemeContext = createContext<Partial<ContextProps>>({
  selectedColor: colorMap.colors[0],
});

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IProps): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState(colorMap.colors[0]);

  const value = {
    selectColor: setSelectedColor,
    selectedColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
