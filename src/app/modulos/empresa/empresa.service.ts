import { EmpresaCompleta, EmpresaSimples } from './../../domain/empresa.domain';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../../domain/cep.domain';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private readonly api = `${environment.api}/start/api/empresa`;

  private http = inject(HttpClient);

  constructor() { }

  public listarRamoAtividade(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api}/listarRamoAtividade`);
  }

  public buscarCep(cep: string): Observable<Cep>{
    return this.http.get<Cep>(`${this.api}/pesquisacep/${cep}`);
  }

  public listarTodasEmpresas(): Observable<EmpresaCompleta[]>{
    return this.http.get<EmpresaCompleta[]>(`${this.api}/pesquisa/listartodas`);
  }

    public loadById(id: number): Observable<EmpresaCompleta> {
    // const headers = new HttpHeaders({
    //   'Token': this.sharedService.getTokenRequisicao()
    // });
    return this.http.get<EmpresaCompleta>(`${this.api}/buscarEmpresaPorId/${id}`);
  }

  public Salvar(empresa: EmpresaSimples) {
    if(empresa.id > 0){
      return this.update(empresa);
    } else {
      return this.create(empresa);
    }
  }

  private create(empresa: EmpresaSimples) :Observable<EmpresaSimples>{
    return this.http.post<EmpresaSimples>(`${this.api}`, empresa);
  }

  private update(empresa: EmpresaSimples){
    return this.http.put<EmpresaSimples>(`${this.api}`, empresa);
  }
}
