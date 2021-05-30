import React, { useCallback, useState } from "react";
import "./App.css";
import PageCarousel from "./Components/Navigation/PageCarousel/PageCarousel";
import { carouselItems } from "./Site/pageItems";
import SiteSections from "./Site/SiteSections";
import { SelectedItem } from "./Site/types";

function App(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    elementId: carouselItems[0]?.elementId,
    index: 0,
  });

  const selectItem = useCallback((elementId: string, index: number) => {
    setSelectedItem({ elementId, index });
  }, []);

  return (
    <div className="App">
      <PageCarousel carouselItems={carouselItems} selectedItem={selectedItem} />
      <SiteSections selectItem={selectItem} />
    </div>
  );
}

export default App;
