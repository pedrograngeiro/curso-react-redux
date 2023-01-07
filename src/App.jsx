import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default function App() {
  return (
    <div id="app">
      <h1>Fundamentos react (Arrow)</h1>
      <Fragmento />
      <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
      <Primeiro />

      <Aleatorio num1={0} num2={1000} />
    </div>
  );
}
