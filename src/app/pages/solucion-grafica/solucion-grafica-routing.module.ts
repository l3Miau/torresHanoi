import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolucionGraficaPage } from './solucion-grafica.page';

const routes: Routes = [
  {
    path: '',
    component: SolucionGraficaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolucionGraficaPageRoutingModule {}
