import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Desafio2RoutingModule } from './desafio2-routing.module';
import { Desafio2Component } from '../desafio2/desafio2.component';

@NgModule({
  declarations: [
    Desafio2Component
  ],
  imports: [
    CommonModule,
    Desafio2RoutingModule
  ]
})
export class Desafio2Module { }
