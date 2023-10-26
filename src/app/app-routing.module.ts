import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'herramienta',
    pathMatch: 'full'
  },
  {
    path: 'herramienta',
    loadChildren: () => import('./herramienta/herramienta.module').then( m => m.HerramientaPageModule)
  },
  {
    path: 'predictor-genero',
    loadChildren: () => import('./predictor-genero/predictor-genero.module').then( m => m.PredictorGeneroPageModule)
  },
  {
    path: 'detector-edad',
    loadChildren: () => import('./detector-edad/detector-edad.module').then( m => m.DetectorEdadPageModule)
  },
  {
    path: 'paises',
    loadChildren: () => import('./paises/paises.module').then( m => m.PaisesPageModule)
  },
  {
    path: 'clima',
    loadChildren: () => import('./clima/clima.module').then( m => m.ClimaPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./wordpress/wordpress.module').then( m => m.WordpressPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
