import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaFormularioComponent } from './escola-formulario/escola-formulario.component';
import { EscolaComponent } from './escola.component';

const routes: Routes = [
  {path: 'escola', component: EscolaComponent}, 
  {path: 'escola/formulario', component: EscolaFormularioComponent},
  { path: 'escola/formulario/:id', component: EscolaFormularioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule { }
