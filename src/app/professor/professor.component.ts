import { Component, OnInit } from '@angular/core';
import { Professor } from '../modelo/professor';
import { ProfessorServico } from '../servico/professor.servico';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
})
export class ProfessorComponent implements OnInit {
  public professores: Professor[] = [];
  public professor: Professor = new Professor();

  constructor(private servico: ProfessorServico) { }

  ngOnInit(): void {
  }

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
    }, error => {
      console.log(error);
    });
  }
}
