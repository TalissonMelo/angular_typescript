import { Component, OnInit } from '@angular/core';
import { Escola } from '../modelo/escola';
import { Paginacao } from '../modelo/paginacao';
import { Professor } from '../modelo/professor';
import { EscolaServico } from '../servico/escola.servico';
import { ProfessorServico } from '../servico/professor.servico';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
})
export class ProfessorComponent implements OnInit {
  public professores: Paginacao = new Paginacao();
  public professor: Professor = new Professor();
  public escolas: Escola[] = [];
  public erroDelecao: string = "";

  constructor(private servico: ProfessorServico, private escolaServico: EscolaServico) { }

  ngOnInit(): void {
    this.listarEscolas();
  }

  listarEscolas(): void {
    this.escolaServico.listar('').subscribe((res) => {
      this.escolas = res;
    })
  }

  listar(parametro: string = ""): void {
    this.servico.listar(this.adicionarParametro(parametro)).subscribe((res) => {
      this.professores = res;
    })
  }

  adicionarParametro(parametro: string): string {
    let criterio: string = "";
    if (this.professor.numero) {
      criterio += `numero=${this.professor.numero}&`
    }

    if (this.professor.nome) {
      criterio += `nome=${this.professor.nome}&`
    }

    if (this.professor.nomeHeroi) {
      criterio += `nomeHeroi=${this.professor.nomeHeroi}&`

    }

    if (this.professor.individualidade) {
      criterio += `individualidade=${this.professor.individualidade}&`
    }

    if (this.professor.escola && this.professor.escola.id) {
      criterio += `idEscola=${this.professor.escola.id}&`
    }

    criterio += parametro;
    return criterio;
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
