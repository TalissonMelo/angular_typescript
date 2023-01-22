import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Escola } from '../modelo/escola';

@Injectable({
  providedIn: 'root'
})
export class EscolaServico {

  constructor(private http: HttpClient) { }

  listar(): Observable<Escola[]> {
    return this.http.get<Escola[]>(`${environment.uri}/escolas`);
  }

  listarPorNome(nome: string): Observable<Escola[]> {
    return this.http.get<Escola[]>(`${environment.uri}/escolas/nomes?nome=${nome}`);
  }

  listarPorId(id: number): Observable<Escola> {
    return this.http.get<Escola>(`${environment.uri}/escolas/${id}`);
  }
}