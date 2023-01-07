import React from "react";

export default function Aleatorio(props) {
  const min = Math.ceil(props.num1);
  const max = Math.floor(props.num2);
  const ale = Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: {min}</strong>
      </p>
      <p>
        <strong>Valor Máximo: {max}</strong>
      </p>

      {ale}
    </div>
  );
}
