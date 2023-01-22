import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Escola } from 'src/app/modelo/escola';
import { EscolaServico } from 'src/app/servico/escola.servico';

@Component({
  selector: 'app-escola-formulario',
  templateUrl: './escola-formulario.component.html'
})
export class EscolaFormularioComponent implements OnInit {

  public escola: Escola = new Escola();
  public validacao: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private servico: EscolaServico) {
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe(url => {
      this.listar(url['id']);
    });
  }

  listar(id: number): void {
    this.servico.listarPorId(id).subscribe((res) => {
      this.escola = res;
    })
  }

  salvar(): void {
    if (this.ehValidoSalvar()) {
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
