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

  // Como não há método DELETE e estou apenas removendo os dados relativos a uma id,
  // preciso confirmar se há efetivamente participantes no array
  getAll(): Observable<Participante[]> {
    return this.http.get<Participante[]>(`${environment.api_uri}/participantes`)
      .pipe(
        map(result => result.filter(el => el.nome && el.email && el.observacoes && el.turma)),
        tap(result => this.participantes.next(result))
      );
  }

  getOne(id: number): Observable<Participante> {
    return this.getAll().pipe(
        map(result => result.find(el => el.id === id)),
        tap(result => this.participanteAtivo.next(result)),
      );
  }

  newParticipante(participante: Participante): void {
    const { nome, email, observacoes, turma } = participante;
    let info = {
      nome,
      email,
      observacoes,
    };

    // O método POST não recebe o atributo turma, então fazemos 2 PUTs
    // 1. Cria o participante sem uma turma, porque a turma vem "nula" se não houver 
    //    id para o participante
    // 2. Com base no id criado para o novo participante, faz a edição dos dados, incluindo a turma
    this.http.put<Participante>(`${environment.api_uri}/participantes`, info)
    .subscribe((novoParticipante) => {
      novoParticipante.turma = turma;
      this.changeParticipante(novoParticipante)
    });
  }

  changeParticipante(participante) {
    const editInfo = {
      ...participante,
      turma: {
        id: participante.turma.id,
      }
    }

    this.http.put<Participante>(`${environment.api_uri}/participantes`, editInfo)
    .subscribe(() => {
      this.getAll().subscribe();
    });
  }

  // O método DELETE não está disponível para a rota http://93.188.161.223:9000/participantes
  // então eu apenas apago os dados do participante.
  delete(id: number) {
    this.http.put(`${environment.api_uri}/participantes`, { id })
      .subscribe(() => {
        this.getAll().subscribe();
      });
  }
}
