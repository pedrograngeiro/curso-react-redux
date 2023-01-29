import React, { cloneElement } from "react";

export default function Familia(props) {
  return (
    <div>
      {props.children.map((child) => cloneElement(child, {... props}))}
    </div>
  )
}