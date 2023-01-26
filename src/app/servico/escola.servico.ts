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

  listar(nome: string): Observable<Escola[]> {
    return this.http.get<Escola[]>(`${environment.uri}/escolas/nomes?nome=${nome}`);
  }

  listarPorId(id: number): Observable<Escola> {
    return this.http.get<Escola>(`${environment.uri}/escolas/${id}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.uri}/escolas/${id}`);
  }

  salvar(escola: Escola): Observable<Escola> {
    return this.http.post<Escola>(`${environment.uri}/escolas`, escola);
  }

  atualizar(id: number, escola: Escola): Observable<Escola> {
    return this.http.put<Escola>(`${environment.uri}/escolas/${id}`, escola);
  }
}