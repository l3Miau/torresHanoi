import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolucionGraficaPageRoutingModule } from './solucion-grafica-routing.module';

import { SolucionGraficaPage } from './solucion-grafica.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolucionGraficaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SolucionGraficaPage]
})
export class SolucionGraficaPageModule {}
