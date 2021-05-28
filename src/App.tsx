import React, { useState } from "react";
import "./App.css";
import PageCarousel from "./Components/Navigation/PageCarousel/PageCarousel";
import { carouselItems } from "./Site/pageItems";
import SiteSections from "./Site/SiteSections";

function App(): JSX.Element {
  const [selectedItemId, setSelectedItemId] = useState<string>(
    carouselItems[0]?.elementId
  );

  return (
    <div className="App">
      <PageCarousel
        carouselItems={carouselItems}
        selectedItemId={selectedItemId}
      />
      <SiteSections selectItem={setSelectedItemId} />
    </div>
  );
}

export default App;
