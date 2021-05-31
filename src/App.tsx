import React, { useState } from "react";
import "./App.css";
import PageCarousel from "./Components/Navigation/PageCarousel/PageCarousel";
import SiteProvider from "./Site/context/SiteContext";
import { carouselItems } from "./Site/pageItems";
import SiteSections from "./Site/SiteSections";
import { SelectedItem } from "./Site/types";

function App(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    elementId: carouselItems[0]?.elementId,
    index: 0,
  });

  return (
    <div className="App">
      <PageCarousel carouselItems={carouselItems} selectedItem={selectedItem} />
      <SiteProvider setSelectedItem={setSelectedItem}>
        <SiteSections />
      </SiteProvider>
    </div>
  );
}

export default App;
