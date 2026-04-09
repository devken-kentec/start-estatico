import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: 'home', loadChildren: ()=> import('./modulos/home/home-routes').then((p)=> p.homeRoutes)},
   { path: 'empresa', loadChildren: ()=> import('./modulos/empresa/empresa-routes').then((p)=> p.empresaRoutes)},
];
