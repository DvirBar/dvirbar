import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navigation/Navbar/Navbar";
import SiteProvider from "./Site/context/SiteContext";
import { navItems } from "./Site/pageItems";
import SiteSections from "./Site/SiteSections";
import { SelectedItem } from "./Site/types";

function App(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    elementId: navItems[0]?.elementId,
    index: 0,
  });

  return (
    <div className="App">
      <Navbar navItems={navItems} selectedItem={selectedItem} />
      <SiteProvider setSelectedItem={setSelectedItem}>
        <SiteSections />
      </SiteProvider>
    </div>
  );
}

export default App;
