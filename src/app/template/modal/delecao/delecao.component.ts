import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delecao',
  templateUrl: './delecao.component.html',
})
export class DelecaoComponent {

  @Input() objeto : any;
  @Output() deletar = new EventEmitter<number>();

  emitirDelecao(id: number): void {
    this.deletar.emit(id);
  }

}
