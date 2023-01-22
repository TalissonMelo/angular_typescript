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

  constructor(private service: EscolaServico) { }

  ngOnInit(): void {
  }

  salvar(): void {
  }

  listarPorNome(): void {
    this.service.listarPorNome(this.nome).subscribe((res) => this.escolas = res);
  }

}
