import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio2Component } from './desafio2.component';

const routes: Routes = [
  { path: '', component: Desafio2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio2RoutingModule { }
