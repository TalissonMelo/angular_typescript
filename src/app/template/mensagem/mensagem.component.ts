import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
})
export class MensagemComponent {
  public sucesso: boolean = false;
  public _erroDelecao: string = "";

  @Input() set erroDelecao(erroDelecao: string) {
    this._erroDelecao = erroDelecao;
    this.sucesso  = this._erroDelecao.toUpperCase().includes('SUCESSO');
  }
}
