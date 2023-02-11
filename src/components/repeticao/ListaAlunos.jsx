import React from "react";
import alunos from "../../data/alunos"

export default function ListaAlunos() {

  const alunosLI = alunos.map((aluno) => (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} {aluno.nota}
      </li>
    ))
  return (
    <div>
      <ul>
        {alunosLI}
      </ul>
    </div>
  )

}
