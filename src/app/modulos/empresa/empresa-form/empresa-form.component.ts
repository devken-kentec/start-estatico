import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { take } from 'rxjs';
import { Cep } from '../../../domain/cep.domain';
import { EmpresaCompleta } from '../../../domain/empresa.domain';

@Component({
  selector: 'app-empresa-form',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule
  ],
  templateUrl: './empresa-form.component.html',
  styleUrl: './empresa-form.component.css',
  preserveWhitespaces: true
})
export class EmpresaFormComponent {
  ramoAtividades: string[] = [];

  empresaForm!: FormGroup;

  private fb = inject(FormBuilder);
  private empresaService = inject(EmpresaService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.empresaForm = this.fb.group({
        "id": [],
        "nomeFantasia": [],
        "razaoSocial": [],
        "dataConstituicao": [],
        "cnpj": [],
        "inscricaoEstadual": [],
        "inscricaoMunicipal": [],
        "regimeTributario": [],
        "cep": [],
        "endereco": [],
        "numero": [],
        "complemento": [],
        "bairro": [],
        "estado": [],
        "municipio": [],
        "ramoDeAtividade": [],
        "telefone": [],
        "telefone2": [],
        "whatsapp": [],
        "celular": [],
        "email": [],
        "webSite": [],
        "redeSocial": [],
        "redeSocial2": [],
        "redeSocial3": [],
        "responsavel": [],
        "dataCadastro": [],
        "statusEmpresa": [],
        "vendaProduto": [],
        "vendaServico": [],
        "localizacao": [],
        "breveDescricao": [],
        "foto": []
      });
      this.listarRamoAtividade();
      this.preencherFormulario();
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

    public preencherFormulario(): void {
    const routeParams = this.route.snapshot.params;
    if(routeParams["id"] > 0){
      this.empresaService.loadById(routeParams["id"]).pipe(
        take(1)
      ).subscribe((res: EmpresaCompleta)=>{
        this.empresaForm.patchValue(res);
      });
    }
  }

}
