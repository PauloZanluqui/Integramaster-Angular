import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Desafio1Component } from './desafio1.component'
import { Desafio1RoutingModule } from './desafio1-routing.module';

@NgModule({
  declarations: [
    Desafio1Component
  ],
  imports: [
    CommonModule,
    Desafio1RoutingModule
  ]
})
export class Desafio1Module { }
