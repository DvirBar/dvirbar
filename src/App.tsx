import React from "react";
import "./App.css";
import Button from "./Components/Button/Button";

function App(): JSX.Element {
  return (
    <div className="App">
      <Button
        text="check"
        onClick={() => {
          console.log("hi");
        }}
      />
      <h1>Title</h1>
      <h2>Subtitle</h2>
    </div>
  );
}

export default App;
