import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m=> m.EventosPageModule)
      },
      {
        path: 'add-event',
        loadChildren: () => import('../add-event/add-event.module').then( m => m.AddEventPageModule)
      },
      {
        path: 'evento-detalle',
        loadChildren: () => import('../evento-detalle/evento-detalle.module').then( m => m.EventoDetallePageModule)
      },
      {
        path: 'acerca-de',
        loadChildren: () => import('../acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/eventos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/eventos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
