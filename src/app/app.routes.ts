import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: 'home', loadChildren: ()=> import('./modulos/home/home-routes').then((p)=> p.homeRoutes)},
];
