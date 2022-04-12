import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolucionExtendidaPage } from './solucion-extendida.page';

const routes: Routes = [
  {
    path: '',
    component: SolucionExtendidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolucionExtendidaPageRoutingModule {}
