import React from "react";
import If from "./If";


export default function UsuarioInfo(props) {
  const usuario = props.usuario || {}
  return (
    <div>
      <If test={usuario && usuario.nome}> 
        Seja Bem vindo <strong>{ props.usuario.nome }</strong>!
      </If>
      <If test={!usuario || !usuario.nome}> 
        Seja Bem vindo <strong> Amigão </strong>!
      </If>
    </div>
  )
}