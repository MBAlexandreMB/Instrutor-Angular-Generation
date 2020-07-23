import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  participantes: {
    id: number,
    nome: String,
    email: String,
    observacoes: String,
    turma: String,
  }[] = [];

  constructor(private http: HttpClient) {
    http.get<any>(`${environment.api_uri}/participantes`)
    .subscribe(result => {
      this.participantes = result;
    });
   }

  ngOnInit() {
  }

}
