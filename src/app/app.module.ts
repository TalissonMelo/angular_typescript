import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaModule } from './escola/escola.module';
import { InicialModule } from './inicial/inicial.module';
import { ProfessorModule } from './professor/professor.module';
import { EscolaServico } from './servico/escola.servico';
import { ProfessorServico } from './servico/professor.servico';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EscolaModule,
    InicialModule,
    ProfessorModule
  ],
  providers: [
    EscolaServico,
    ProfessorServico
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
