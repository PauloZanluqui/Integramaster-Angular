import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio3',
  templateUrl: './desafio3.component.html',
  styleUrls: ['./desafio3.component.scss']
})
export class Desafio3Component implements OnInit {
  salario: number = 0;
  aumento: number = 0;
  novoSalario: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  Reajuste() {
    this.salario= Number((document.getElementById('salario') as HTMLInputElement).value);
    this.aumento = Number((document.getElementById('aumento') as HTMLInputElement).value);
    this.novoSalario = Number(this.salario + (this.salario * this.aumento) / 100);
    this.novoSalario = parseFloat(this.novoSalario.toFixed(2));
    (document.getElementById('SalarioAjustado') as HTMLInputElement).value = String(this.novoSalario);
  }
}
