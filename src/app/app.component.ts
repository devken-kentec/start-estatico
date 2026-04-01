import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmpresaService } from './modulos/empresa/empresa.service';
import { take } from 'rxjs';
import { Cep } from './domain/cep.domain';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'start-estatico';
  ramoAtividades: string[] = [];

  empresaForm!: FormGroup;

  private route = inject(Router)
  private fb = inject(FormBuilder);
  private empresaService = inject(EmpresaService);

  ngOnInit(): void {
      this.route.navigate(['/home'])
      this.empresaForm = this.fb.group({
        "id":[],
        "dataCadastro":[],
        "nomeFantasia":[],
        "cep":[],
        "endereco":[],
        "complemento":[],
        "bairro":[],
        "municipio":[],
        "telefone":[],
        "whatsapp":[],
        "ramoDeAtividade":[],
        "breveDescricao":[],
        "localizacao":[]
      });
      this.listarRamoAtividade();
  }

  public open: boolean = false;
  teste: string = 'Lorenzo';

  public abrirMenu() {
    this.open = !this.open;
  }

  public listarRamoAtividade(){
    this.empresaService.listarRamoAtividade().pipe(take(1)).subscribe((res: string[])=>{
      this.ramoAtividades = res;
    });
  }

  public buscarCep(): void {
    let cep = this.empresaForm.get("cep")?.value;
    this.empresaService.buscarCep(cep).pipe(take(1)).subscribe((res: Cep)=>{
        this.empresaForm.get("cep")?.setValue(res.cep);
        this.empresaForm.get("endereco")?.setValue(res.logradouro);
        this.empresaForm.get("bairro")?.setValue(res.bairro);
        this.empresaForm.get("municipio")?.setValue(res.localidade);
    });
  }

  public salvarEmpresa(): void {
    let form = this.empresaForm;
    if(form.valid){

    }
    form.reset();
  }
}
