import React from "react";
import "./App.css";
import Card from "./Components/Containers/Card/Card";
import CardBody from "./Components/Containers/Card/CardBody";
import CardHeader from "./Components/Containers/Card/CardHeader";
import CardTitles from "./Components/Containers/Card/CardTitles";
import Button from "./Components/Inputs/Button/Button";

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

      <Card>
        <CardHeader>
          <CardTitles
            title={"Title"}
            subTitle={"This is checking of subtitle"}
          />
        </CardHeader>
        <CardBody>
          <p>This is body</p>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
