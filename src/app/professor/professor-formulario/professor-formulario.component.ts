import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Escola } from 'src/app/modelo/escola';
import { Professor } from 'src/app/modelo/professor';
import { EscolaServico } from 'src/app/servico/escola.servico';
import { ProfessorServico } from 'src/app/servico/professor.servico';

@Component({
  selector: 'app-professor-formulario',
  templateUrl: './professor-formulario.component.html',
})
export class ProfessorFormularioComponent implements OnInit {
  public professor: Professor = new Professor();
  public escolas: Escola[] = [];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private servico: ProfessorServico, 
    private escolaServico: EscolaServico) {
  }

  ngOnInit(): void {
    this.listarEscolas();
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(url => {
      this.listar(url['id']);
    });
  }

  listarEscolas(): void {
    this.escolaServico.listar('').subscribe((res) => {
      this.escolas = res;
    })
  }

  listar(id: number): void {
    this.servico.listarPorId(id).subscribe((res) => {
      this.professor = res;
    })
  }
}
