import { Routes } from '@angular/router';

export const empresaRoutes: Routes = [
  { path:'', title:'Listagem', loadComponent: ()=> import('./empresa-list/empresa-list.component').then((p)=> p.EmpresaListComponent)},
  { path:'editar/:id', title:'Editar', loadComponent: ()=> import('./empresa-form/empresa-form.component').then((p)=> p.EmpresaFormComponent)},
  { path:'new', title:'Cadastrar', loadComponent: ()=> import('./empresa-form/empresa-form.component').then((p)=> p.EmpresaFormComponent)}

];
