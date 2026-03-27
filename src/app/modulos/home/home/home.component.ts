import { Component } from '@angular/core';
import { HomeListComponent } from '../home-list/home-list.component';
import { HomeConteudoComponent } from '../home-conteudo/home-conteudo.component';
import { HomePessoaComponent } from '../home-pessoa/home-pessoa.component';

@Component({
  selector: 'app-home',
  imports: [
    HomeListComponent,
    HomeConteudoComponent,
    HomePessoaComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mostrarConteudo: boolean = false;
  nome: string = 'Lorenzo';

  constructor() { }

  ngOnInit(): void {

      this.mostrarConteudo = true;

  }

}
