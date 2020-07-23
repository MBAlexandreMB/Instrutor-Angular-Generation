import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Turma } from '../models/turma.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  turmas: Subject<Turma[]> = new Subject();
  turmaAtiva: BehaviorSubject<Turma> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  getAll(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${environment.api_uri}/turmas`)
      .pipe(
        tap((result) => this.turmas.next(result))
      );
  }
  
  getOne(id): Observable<Turma> {
    return this.getAll().pipe(
      map(result => result.find(el => el.id === id)),
      tap(result => this.turmaAtiva.next(result)),
    );
  }

  newTurma(turma: {descricao: String, tipo: String}): void {
    this.http.post<Turma[]>(`${environment.api_uri}/turmas`, turma)
      .pipe(
        tap((result) => this.turmas.next(result))
      ).subscribe();
  }
}
