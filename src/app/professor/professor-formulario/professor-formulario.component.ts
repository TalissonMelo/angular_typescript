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
  public erroDelecao: string = "";

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

  atualizar(): void {
    if(this.ehValidoSalvar()) {
      this.servico.atualizar(this.professor.id, this.professor).subscribe(res => {
        this.erroDelecao = "Atualizado com sucesso";
      }, error => {
        this.erroDelecao = error.error.descricao;
      })
    }
  }

  salvar(): void {
    if(this.ehValidoSalvar()) {
      this.servico.salvar(this.professor).subscribe(res => {
        this.professor.numero = res.numero;
        this.erroDelecao = "Cadastrado com sucesso";
      }, error => {
        this.erroDelecao = error.error.descricao;
      })
    }
  }

  ehValidoSalvar(): boolean {
    if(this.professor.nome && this.professor.nomeHeroi && this.professor.escola) {
      return true;
    }
    window.alert("Preencha os campos nome, herói e escola são obrigatórios");
    return false;
  }
}
