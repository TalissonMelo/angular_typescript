import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolaComponent } from './escola.component';

const routes: Routes = [
  {
    path: 'escolas', component: EscolaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscolaRoutingModule { }
