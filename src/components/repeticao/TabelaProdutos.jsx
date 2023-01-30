import React from "react";
import produtos from "../../data/produtos"

export default function TabelaProdutos() {

  const ProdutosLista = produtos.map((produto) => (
    <li key={produto.id}>
      {produto.id} {produto.nome} {produto.preco}
    </li>
  ))
  return (
    <div>
      <ul>
        {ProdutosLista}
      </ul>
    </div>
  )
}