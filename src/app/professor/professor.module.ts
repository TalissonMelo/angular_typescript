import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';

@NgModule({
  declarations: [
    ProfessorComponent
  ],
  imports: [
    CommonModule, 
    ProfessorRoutingModule
  ]
})
export class ProfessorModule { }
