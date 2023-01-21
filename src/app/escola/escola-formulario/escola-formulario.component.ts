import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Escola } from 'src/app/modelo/escola';

@Component({
  selector: 'app-escola-formulario',
  templateUrl: './escola-formulario.component.html'
})
export class EscolaFormularioComponent implements OnInit {

  public escola: Escola = new Escola();
  public validacao: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(url => {
      console.log(url['id']);
    });
  }

  salvar(): void {
    if (this.ehValidoSalvar()) {
      console.log(this.escola)
      this.validacao = true;
    }
  }

  ehValidoSalvar(): boolean {
    if (this.escola.nome) {
      return true;
    }
    this.validacao = false;
    return false;
  }
}
