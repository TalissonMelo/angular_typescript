import { Component, OnInit } from '@angular/core';
import { Professor } from '../modelo/professor';
import { ProfessorServico } from '../servico/professor.servico';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  public professores: Professor[] = [];

  constructor(private servico: ProfessorServico) { }

  ngOnInit(): void {
  }

  listar(): void {
    this.servico.listar().subscribe((res) => {
      this.professores = res.content;
    })
  }

}
