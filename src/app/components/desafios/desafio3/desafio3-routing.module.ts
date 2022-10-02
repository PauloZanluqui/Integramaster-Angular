import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio3Component } from './desafio3.component';

const routes: Routes = [
  { path: '', component: Desafio3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio3RoutingModule { }
