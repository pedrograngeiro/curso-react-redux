import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

import Comp from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

ReactDOM.render(
  <div id="app">
    <Comp></Comp>
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />

    <ComParametro titulo="Situação do Aluno" aluno="Maria" nota={8.7} />
    <Fragmento />
  </div>,
  document.getElementById("root")
);
