import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio2',
  templateUrl: './desafio2.component.html',
  styleUrls: ['./desafio2.component.scss']
})
export class Desafio2Component implements OnInit {
  area: number = 0;
  lado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  areaQuadrado() {
    this.lado = Number((document.getElementById('lado') as HTMLInputElement).value) ;
    this.area = Math.pow(this.lado, 2);
    (document.getElementById('area') as HTMLInputElement).value = String(this.area);
  }
}
