import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionTierList } from './champion-tier-list/champion-tier-list.component';

// per cada ruta definim el path i el component que la gestionarà

const routes: Routes = [
  {
    path: '',
    component: ChampionTierList
  },
  {
    path: 'about/:parametre',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }