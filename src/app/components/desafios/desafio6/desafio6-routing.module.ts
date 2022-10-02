import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio6Component } from './desafio6.component';

const routes: Routes = [
  { path: '', component: Desafio6Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio6RoutingModule { }
