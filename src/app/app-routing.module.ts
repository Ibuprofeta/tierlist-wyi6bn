import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// per cada ruta definim el path i el component que la gestionarà

const routes: Routes = [
  {
    path: '',
  },
  {
    path: 'about/:parametre',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }