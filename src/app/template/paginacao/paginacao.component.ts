import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paginacao } from 'src/app/modelo/paginacao';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
})
export class PaginacaoComponent {
  public lista: number[] = [];
  @Output() listar = new EventEmitter<string>();

  public _paginacao: Paginacao = new Paginacao();
  @Input() set paginacao(paginacao: Paginacao) {
    this.lista = [];
    this._paginacao = paginacao;
    for (let index = 0; index < paginacao.totalPages; index++) {
      this.lista.push(index);
    }
  }

  listarPaginacao(pagina: number): void {
    this.listar.emit(`size=2&page=${pagina}`);
  }
}
