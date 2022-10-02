import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'desafio1',
  loadChildren: ()=>import('./components/desafios/desafio1/desafio1.module').then(m=>m.Desafio1Module)},
  {path: 'desafio2',
  loadChildren: ()=>import('./components/desafios/desafio2/desafio2.module').then(m=>m.Desafio2Module)},
  {path: 'desafio3',
  loadChildren: ()=>import('./components/desafios/desafio3/desafio3.module').then(m=>m.Desafio3Module)},
  {path: 'desafio4',
  loadChildren: ()=>import('./components/desafios/desafio4/desafio4.module').then(m=>m.Desafio4Module)},
  {path: 'desafio5',
  loadChildren: ()=>import('./components/desafios/desafio5/desafio5.module').then(m=>m.Desafio5Module)},
  {path: 'desafio6',
  loadChildren: ()=>import('./components/desafios/desafio6/desafio6.module').then(m=>m.Desafio6Module)},
  {path: 'desafio7',
  loadChildren: ()=>import('./components/desafios/desafio7/desafio7.module').then(m=>m.Desafio7Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
