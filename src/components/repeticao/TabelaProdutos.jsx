import React from "react";
import produtos from "../../data/produtos"

export default function TabelaProdutos() {

  const ProdutosLista = produtos.map((produto) => (
    <li key={produto.id}>
      Id: {produto.id}
       Nome: {produto.nome}
       Preço: {produto.preco}
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