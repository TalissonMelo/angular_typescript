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
  public erroDelecao: string = "";

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
      this.servico.salvar(this.escola).subscribe(res => {
        this.erroDelecao = "Salvo com sucesso!";
      }, error => {
        this.erroDelecao = error.error.descricao;
      })
    }
  }

  atualizar(): void {
    if(this.ehValidoSalvar()) {
      this.servico.atualizar(this.escola.id, this.escola).subscribe(res => {
        this.erroDelecao = "Atualizado com sucesso";
      }, error => {
        this.erroDelecao = error.error.descricao;
      })
    }
  }


  ehValidoSalvar(): boolean {
    if (this.escola.nome) {
      return true;
    }
    return false;
  }
}
