import { EmpresaService } from './../empresa.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { take } from 'rxjs';
import { EmpresaCompleta } from '../../../domain/empresa.domain';

@Component({
  selector: 'app-empresa-list',
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './empresa-list.component.html',
  styleUrl: './empresa-list.component.css',
  preserveWhitespaces: true
})
export class EmpresaListComponent {

  carregando: boolean = false;
  empresas: EmpresaCompleta[] = [];

  private empresaService = inject(EmpresaService);
  private router = inject(Router);
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.listarTodasEmpresas();
  }

  public listarTodasEmpresas(): void {
    this.empresaService.listarTodasEmpresas().pipe(take(1)).subscribe((res: EmpresaCompleta[]) => {
            this.empresas = res,
            this.carregando = true
    });
  }

    public editar(id: number): void{
      this.router.navigate(["editar", id], { relativeTo: this.route });
  }
}
