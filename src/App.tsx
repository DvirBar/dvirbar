import React from "react";
import "./App.css";
import ThemeProvider from "./Components/Navigation/Navbar/ColorPicker/ThemeContext";
import ContextWrapper from "./ContextWrapper";

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider>
        <ContextWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
