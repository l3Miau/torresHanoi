import { Component, OnInit } from '@angular/core';

export interface EstadoHanoi {
  1: number[];
  2: number[];
  3: number[];
  4: number[];
}

export type PilarHanoi = keyof EstadoHanoi;

@Component({
  selector: 'app-solucion-extendida',
  templateUrl: './solucion-extendida.page.html',
  styleUrls: ['./solucion-extendida.page.scss'],
})
export class SolucionExtendidaPage implements OnInit {

  Object = Object;

  estadoInicial : EstadoHanoi = {
    1: [1,2,3,4,5,6],
    2: [],
    3: [],
    4: []
  }

  constructor() { }

  ngOnInit() {
  }

  //n es el numero de discos
  //inicio es el pilar donde inician los discos
  //fin es el disco en el cual deben quedar los discos
  //aunx1 y aux2 son los pilares auxiliares
  async hanoi(n: number, inicio: PilarHanoi, fin: PilarHanoi, aux1: PilarHanoi, aux2: PilarHanoi) {

    if (n === 1) await this.movimiento(inicio, fin);
    
    if(n > 1) {
      await this.hanoi(n - 2, inicio, aux1, fin, aux2);
      await this.movimiento(inicio, aux2);
      await this.movimiento(inicio, fin);
      await this.movimiento(aux2, fin);
      await this.hanoi(n - 2, aux1, fin, inicio, aux2);
    }
  }

  //funcion que imprime y realiza los movimientos
  async movimiento(inicio: PilarHanoi, fin: PilarHanoi) {
    console.log(inicio + ' -> ' + fin)

    // Tomar el disco del pilar inicio
    const discoPorMover = this.estadoInicial[inicio].shift();

    await this.esperar(500);

    // Poner el disco en el pilar final
    this.estadoInicial[fin].unshift(discoPorMover)

    await this.esperar(500);

    console.table(this.estadoInicial);
  }
  
  // funcion que espera un tiempo
  esperar(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  reload() {
    window.location.reload();
  }
}
