import { Component } from '@angular/core';
import { Professor } from '../modelo/professor';
import { ProfessorServico } from '../servico/professor.servico';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
})
export class ProfessorComponent {
  public professores: Professor[] = [];
  public professor: Professor = new Professor();
  public erroDelecao: string = "";

  constructor(private servico: ProfessorServico) { }

  listar(): void {
    this.servico.listar().subscribe((res) => {
      this.professores = res.content;
    })
  }

  preparaDelecao(professor: Professor) {
    this.professor = professor;
  }

  deletar(id: number): void {
    this.servico.deletar(id).subscribe(() => {
      let index: number = this.professores.findIndex((professor) => professor.id == id);
      this.professores.splice(index, 1);
      this.erroDelecao = "Deletado com sucesso!"
    }, error => {
      this.erroDelecao = error.error.descricao;
    });
  }
}
