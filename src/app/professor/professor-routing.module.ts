import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorFormularioComponent } from './professor-formulario/professor-formulario.component';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorComponent},
  { path: "professor/formulario", component: ProfessorFormularioComponent },
  { path: "professor/formulario/:id", component: ProfessorFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
