import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolucionExtendidaPageRoutingModule } from './solucion-extendida-routing.module';

import { SolucionExtendidaPage } from './solucion-extendida.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolucionExtendidaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SolucionExtendidaPage]
})
export class SolucionAlternativaPageModule {}
