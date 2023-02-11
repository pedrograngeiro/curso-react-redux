import React from "react";


export default function Aleatorio(props) {
  const { min, max } = props;
  const ale = parseInt(Math.random() * (max - min), 10) + min;

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {max}
      </p>

      <p>
        <strong>Valor Escolhido: </strong> {ale}
      </p>
    </div>
  );
}
