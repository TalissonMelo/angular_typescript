import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfessorServico {

  constructor(private http: HttpClient) { }

  listar(): string {
    return `${environment.uri}/professores`;
  }

}