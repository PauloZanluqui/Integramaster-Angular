import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Desafio4Component } from './desafio4.component';

const routes: Routes = [
  { path: '', component: Desafio4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Desafio4RoutingModule { }
