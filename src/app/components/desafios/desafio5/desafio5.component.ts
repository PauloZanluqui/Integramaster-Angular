import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio5',
  templateUrl: './desafio5.component.html',
  styleUrls: ['./desafio5.component.scss']
})
export class Desafio5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  retornaVogais() {
    let str = (document.getElementById('string') as HTMLInputElement).value;
    str = str.toLowerCase();
    let vetor = [];
    vetor = str.split('')
    let cont = 0;
    for (let i = 0; i < vetor.length; i++) {
      let v = vetor[i];
      if (v === "a" || v === "e" || v === "i" || v === "o" || v === "u") {
        cont += 1;
      }
    }
    (document.getElementById('vogais') as HTMLInputElement).value = String(cont);
  }
}
