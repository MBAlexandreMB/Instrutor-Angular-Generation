import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { Turma } from '../models/turma.model';
import { environment } from 'src/environments/environment';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class TurmasService {
  turmas: BehaviorSubject<Turma[]> = new BehaviorSubject([]);
  turmaAtiva: BehaviorSubject<Turma> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private toastService: ToastService) { }

  getAll(): Observable<Turma[]> {
    return this.http.get<Turma[]>(`${environment.api_uri}/turma`)
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
    this.http.post<Turma>(`${environment.api_uri}/turma`, { ...turma, participantes: [] })
    .pipe(catchError(erro => {
      this.toastService.show(
        'Erro',
        `Erro ao cadastrar turma: ${erro}`,
        'text-danger'
      );
      
      throw erro;
    }))
      .subscribe(() => {
        this.toastService.show(
          'Sucesso',
          "Turma cadastrada com sucesso!",
          'text-success'
        );
        this.getAll().subscribe()
      });
  }
}

