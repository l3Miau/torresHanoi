import { Component, OnInit } from '@angular/core';


export interface EstadoHanoi {
  1: number[];
  2: number[];
  3: number[];
}

export type PilarHanoi = keyof EstadoHanoi;

@Component({
  selector: 'app-solucion-grafica',
  templateUrl: './solucion-grafica.page.html',
  styleUrls: ['./solucion-grafica.page.scss'],
})
export class SolucionGraficaPage implements OnInit {

  Object = Object;

  estadoInicial : EstadoHanoi = {
    1: [3,4,5,6],
    2: [],
    3: []
  }

  constructor() { }

  ngOnInit() {
  }

  //n es el numero de discos
  //inicio es el pilar donde inician los discos
  //fin es el disco en el cual deben quedar los discos
  async hanoi(n: number, inicio: PilarHanoi , fin: PilarHanoi) {
    const pilarLibre = 6 - (inicio + fin) as PilarHanoi;

    if (n === 1) await this.movimiento(inicio, fin)

    if (n > 1) {
      await this.hanoi(n-1, inicio, pilarLibre)
      await this.movimiento(inicio, fin)
      await this.hanoi(n-1, pilarLibre, fin)
    }
  }
  
  //funcion que espera un tiempo
  esperar(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  //funcion que imprime y realiza los movimientos
  async movimiento(inicio: PilarHanoi, fin: PilarHanoi) {
    console.log(inicio + ' -> ' + fin)
    //tomar el disco del pilar inicio
    const discoPorMover = this.estadoInicial[inicio].shift();

    await this.esperar(500);

    //poner el disco en el pilar final
    this.estadoInicial[fin].unshift(discoPorMover)

    await this.esperar(500);

    // console.table(this.estadoInicial);
  }

  //funcion para recargar la pagina
  reload() {
    console.log('Recargando...');
    window.location.reload();
  }
}
