import React from "react";
import "./App.css";
import { FamilyMember } from "components/basics/FamilyMember";

import Primeiro from "components/basics/Primeiro";
import ComParametro from "components/basics/ComParametro";
import Fragment from "./components/basics/Fragmento";
import RandomNumber from "components/basics/RandomNumber";
import Card from "components/layout/Card/Card";
import { Family } from "components/basics/Family";
import { StudentList } from "components/repetition/StudentList";
import { ProductsTable } from "components/repetition/ProductsTable";
import { OddOrEven } from "components/conditional/OddOrEven";
import { UserInfo } from "components/conditional/UserInfo";

const App = () => {
  return (
    <div id="App">
      <h1>React Basics</h1>
      <div className="Cards">
        <Card title="#09 - Conditional Render - UserInfo">
          <UserInfo user={{ name: "Fernando" }} />
        </Card>

        <Card title="#08 - Conditional Render - Odd or Even" color="#5959">
          <OddOrEven number="20" />
          <OddOrEven number="13" />
          <OddOrEven number="1" />
          <OddOrEven number="9888" />
        </Card>

        <Card title="#07 - Repetition Challenge" color="#909">
          <ProductsTable />
        </Card>

        <Card title="#06 - Repetition">
          <StudentList />
        </Card>

        <Card title="#05 - Component with Children" color="#3578FF">
          <Family surname="Ferreira">
            <FamilyMember name="Pedro" />
            <FamilyMember name="Diego" />
            <FamilyMember name="João" />
          </Family>
        </Card>

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
