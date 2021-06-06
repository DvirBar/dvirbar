import React, { useContext, useState } from "react";
import "./App.css";
import { ThemeContext } from "./Components/Navigation/Navbar/ColorPicker/ThemeContext";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import SiteProvider from "./Site/context/SiteContext";
import { navItems } from "./Site/pageItems";
import SiteSections from "./Site/SiteSections";
import { SelectedItem } from "./Site/types";

function ContextWrapper(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    elementId: navItems[0]?.elementId,
    index: 0,
  });

  const { selectedColor } = useContext(ThemeContext);

  const style = { "--main-color": selectedColor } as React.CSSProperties;

  return (
    <div style={style}>
      <Navbar navItems={navItems} selectedItem={selectedItem} />
      <SiteProvider setSelectedItem={setSelectedItem}>
        <SiteSections />
      </SiteProvider>
    </div>
  );
}

export default ContextWrapper;
