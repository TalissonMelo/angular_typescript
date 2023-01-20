import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfessorFormularioComponent } from './professor-formulario/professor-formulario.component';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';

@NgModule({
  declarations: [
    ProfessorComponent,
    ProfessorFormularioComponent,
  ],
  imports: [
    CommonModule, 
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
