import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio6',
  templateUrl: './desafio6.component.html',
  styleUrls: ['./desafio6.component.scss']
})
export class Desafio6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  invertePalavra() {
    let str = (document.getElementById('string') as HTMLInputElement).value;
    str = str.split('').reverse().join('');
    (document.getElementById('reverso') as HTMLInputElement).value = String(str);
  }
}
