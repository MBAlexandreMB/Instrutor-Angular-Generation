import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Participante } from '../models/participante.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {
  participantes: BehaviorSubject<Participante[]> = new BehaviorSubject([]);
  participanteAtivo: BehaviorSubject<Participante> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<Participante[]> {
    return this.http.get<Participante[]>(`${environment.api_uri}/participantes`)
      .pipe(
        tap(r => console.log(r)),
        tap(result => this.participantes.next(result))
      );
  }

  getOne(id: number): Observable<Participante> {
    return this.getAll().pipe(
        map(result => result.find(el => el.id === id)),
        tap(result => this.participanteAtivo.next(result)),
      );
  }

  newParticipante(participante: { 
    nome: String,
    email: String,
    observacoes: String,
    turma: String
  }): void {
    this.http.post<Participante[]>(`${environment.api_uri}/participantes`, participante)
    .subscribe(() => {
      this.getAll().subscribe();
    });
  }
}
