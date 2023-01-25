import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from '../template/mensagem/mensagem.module';
import { DelecaoModule } from '../template/modal/delecao/delecao.module';
import { EscolaFormularioComponent } from './escola-formulario/escola-formulario.component';
import { EscolaRoutingModule } from './escola-routing.module';
import { EscolaComponent } from './escola.component';

@NgModule({
  declarations: [
    EscolaComponent,
    EscolaFormularioComponent,
  ],
  imports: [
    CommonModule, 
    EscolaRoutingModule,
    FormsModule,
    DelecaoModule,
    MensagemModule
  ]
})
export class EscolaModule { }
