import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio4',
  templateUrl: './desafio4.component.html',
  styleUrls: ['./desafio4.component.scss']
})
export class Desafio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  retornaMaiorMenor() {
    let vetor = new Array(5);
    let str = (document.getElementById('vetor') as HTMLInputElement).value;
    vetor = str.split(",");
    let max = Math.max(...vetor);
    let min = Math.min(...vetor);
    (document.getElementById('Maior') as HTMLInputElement).value = String(max);
    (document.getElementById('Menor') as HTMLInputElement).value = String(min);
  }
}
