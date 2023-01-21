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

  constructor(private service: EscolaServico) { }

  ngOnInit(): void {
  }

  salvar(): void {
    console.log("salvar");
  }

  listar(): void {
    this.service.listar().subscribe((res) => this.escolas = res);
  }

}
