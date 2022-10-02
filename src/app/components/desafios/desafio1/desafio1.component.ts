import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio1',
  templateUrl: './desafio1.component.html',
  styleUrls: ['./desafio1.component.scss']
})
export class Desafio1Component implements OnInit {
  media: number = 0;
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;

  constructor() { }
  
  ngOnInit(): void {
  }

  mediaAritmetica() {
    this.n1 = Number((document.getElementById('n1') as HTMLInputElement).value) ;
    this.n2 = Number((document.getElementById('n2') as HTMLInputElement).value) ;
    this.n3 = Number((document.getElementById('n3') as HTMLInputElement).value) ;
    this.media = (this.n1 + this.n2 + this.n3) / 3;
    (document.getElementById('media') as HTMLInputElement).value = String(this.media);
  }
}
