import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InicialRoutingModule } from './inicial-routing.module';
import { InicialComponent } from './inicial.component';



@NgModule({
  declarations: [
    InicialComponent
  ],
  imports: [
    CommonModule,
    InicialRoutingModule
  ]
})
export class InicialModule { }
