import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EventosPage } from './eventos/eventos.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'eventos',
    component: EventosPage,
    children: [
      {
        path: ':id',
        loadChildren: () => import('./evento-detalle/evento-detalle.module').then( m => m.EventoDetallePageModule)
      }
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
