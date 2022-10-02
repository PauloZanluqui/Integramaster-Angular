import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio1Component } from './desafio1.component';

const routes: Routes = [
  { path: '', component: Desafio1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio1RoutingModule { }
