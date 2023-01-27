import { Component } from '@angular/core';
import { Paginacao } from '../modelo/paginacao';
import { Professor } from '../modelo/professor';
import { ProfessorServico } from '../servico/professor.servico';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
})
export class ProfessorComponent {
  public professores: Paginacao = new Paginacao();
  public professor: Professor = new Professor();
  public erroDelecao: string = "";

  constructor(private servico: ProfessorServico) { }

  listar(parametros: string = ""): void {
    this.servico.listar(parametros).subscribe((res) => {
      this.professores = res;
    })
  }

  preparaDelecao(professor: Professor) {
    this.professor = professor;
  }

  deletar(id: number): void {
    this.servico.deletar(id).subscribe(() => {
      let index: number = this.professores.content.findIndex((professor) => professor.id == id);
      this.professores.content.splice(index, 1);
      this.erroDelecao = "Deletado com sucesso!"
    }, error => {
      this.erroDelecao = error.error.descricao;
    });
  }
}
