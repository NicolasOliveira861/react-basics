import React from "react";
import { render } from "react-dom";
import "./styles.css";
import Primeiro from "components/basics/Primeiro";
import ComParametro from "components/basics/ComParametro";
import Fragment from "./components/basics/Fragmento";

render(
  <div id="app">
    <Primeiro />
    <ComParametro title="Student Situation" student="John" grade={9.8} />
    <ComParametro title="Student Situation" student="Jack" grade={6} />
    <Fragment />
  </div>,
  document.getElementById("root")
);
