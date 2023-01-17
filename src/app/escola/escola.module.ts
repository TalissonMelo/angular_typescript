import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscolaComponent } from './escola.component';
import { EscolaRoutingModule } from './escola-routing.module';

@NgModule({
  declarations: [
    EscolaComponent
  ],
  imports: [
    CommonModule, 
    EscolaRoutingModule
  ]
})
export class EscolaModule { }
