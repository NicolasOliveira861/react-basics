import React from "react";
import "./App.css";

import Primeiro from "components/basics/Primeiro";
import ComParametro from "components/basics/ComParametro";
import Fragment from "./components/basics/Fragmento";
import RandomNumber from "components/basics/RandomNumber";
import Card from "components/layout/Card/Card";

const App = () => {
  return (
    <div id="App">
      <h1>React Basics</h1>
      <div className="Cards">
        <Card title="#04 - RandomNumber Challenge" color="#080">
          <RandomNumber min={1} max={3} />
        </Card>

        <Card title="#03 - Fragment" color="#040">
          <Fragment />
        </Card>

        <Card title="#02 - Params" color="#444">
          <ComParametro title="Student Situation" student="Jack" grade={6} />
          <ComParametro title="Student Situation" student="John" grade={9.8} />
        </Card>

        <Card title="#01 - JSX Elements" color="#1EFD">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};

export default App;
