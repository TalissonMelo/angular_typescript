import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Professor } from '../modelo/professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServico {

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${environment.uri}/professores`);
  }

  listarPorId(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${environment.uri}/professores/${id}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.uri}/professores/${id}`);
  }
}