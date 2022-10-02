import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio7',
  templateUrl: './desafio7.component.html',
  styleUrls: ['./desafio7.component.scss']
})
export class Desafio7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calculaFatorial() {
    let num = Number((document.getElementById('numero') as HTMLInputElement).value);
    let fatorial = 1;
    for (let x = 1; x <= num; x++) {
      fatorial = fatorial * x
    }
    (document.getElementById('fatorial') as HTMLInputElement).value = String(fatorial);
  }
}
