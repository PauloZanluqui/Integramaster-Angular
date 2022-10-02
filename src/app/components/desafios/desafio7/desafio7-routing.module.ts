import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio7Component } from './desafio7.component';

const routes: Routes = [
  { path: '', component: Desafio7Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio7RoutingModule { }
