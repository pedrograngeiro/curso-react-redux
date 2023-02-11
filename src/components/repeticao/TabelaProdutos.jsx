import "./TabelaProdutos.css";
import React from "react";
import produtos from "../../data/produtos"

export default function TabelaProdutos() {

  const ProdutosLista = produtos.map((produto, i) => (

    <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={produto.id}>
      <td>{produto.id}</td>
      <td>{produto.nome}</td>
      <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
    </tr>
  ))
  return (
    <div className="TabelaProdutos">

      <table border="1">
        <thead>
          <tr >
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>

        <tbody>
          {ProdutosLista}
        </tbody>
        
      </table>

    </div>
  )
}