import { Component, OnInit } from '@angular/core';
import { Escola } from '../modelo/escola';
import { EscolaServico } from '../servico/escola.servico';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {
  public escolas: Escola[] = [];
  public nome: string = "";
  public escola: Escola = new Escola();

  constructor(private service: EscolaServico) { }

  ngOnInit(): void {
  }

  listarPorNome(): void {
    this.service.listarPorNome(this.nome).subscribe((res) => this.escolas = res);
  }

  preparaDelecao(escola: Escola) {
    this.escola = escola;
  }

  deletar(id: number): void {
    this.service.deletar(id).subscribe(() => {
      let index: number = this.escolas.findIndex((escola) => escola.id == id);
      this.escolas.splice(index, 1);
    }, error => {
      console.log(error);
    });

  }
}
