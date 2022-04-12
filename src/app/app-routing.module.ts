import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'solucion-grafica',
    loadChildren: () => import('./pages/solucion-grafica/solucion-grafica.module').then( m => m.SolucionGraficaPageModule)
  },
  {
    path: 'solucion-extendida',
    loadChildren: () => import('./pages/solucion-extendida/solucion-extendida.module').then( m => m.SolucionAlternativaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
