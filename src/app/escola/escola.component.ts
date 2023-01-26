import { Component, OnInit } from '@angular/core';
import { Escola } from '../modelo/escola';
import { EscolaServico } from '../servico/escola.servico';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
})
export class EscolaComponent implements OnInit {
  public escolas: Escola[] = [];
  public nome: string = "";
  public escola: Escola = new Escola();
  public erroDelecao: string = "";

  constructor(private servico: EscolaServico) { }

  ngOnInit(): void {
  }

  listarPorNome(): void {
    this.servico.listar(this.nome).subscribe((res) => this.escolas = res);
  }

  preparaDelecao(escola: Escola) {
    this.escola = escola;
  }

  deletar(id: number): void {
    this.servico.deletar(id).subscribe(() => {
      let index: number = this.escolas.findIndex((escola) => escola.id == id);
      this.escolas.splice(index, 1);
      this.erroDelecao = 'Deletado com sucesso!'
    }, error => {
      this.erroDelecao = error.error.descricao;
    });
  }
}
