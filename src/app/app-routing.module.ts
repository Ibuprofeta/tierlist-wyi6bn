import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TierListComponent } from './champion-tier-list/champion-tier-list.component'

import { ChampionsComponent } from './champions/champions.component'

// per cada ruta definim el path i el component que la gestionarà

const routes: Routes = [
  {
    path: '',
    component: ChampionsComponent
  },
  {
    path: 'tierlist',
    component: TierListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }