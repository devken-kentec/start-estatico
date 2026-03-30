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

  public buscarCep(cep: string){
    return this.http.get<Cep>(`${this.api}/pesquisacep/${cep}`);
  }
}
