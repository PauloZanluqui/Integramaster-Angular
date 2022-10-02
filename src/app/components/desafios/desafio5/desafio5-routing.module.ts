import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio5Component } from './desafio5.component';

const routes: Routes = [
  { path: '', component: Desafio5Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio5RoutingModule { }
