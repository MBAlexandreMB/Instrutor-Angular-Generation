import { Component, OnInit } from '@angular/core';
import { Participante } from 'src/app/shared/models/participante.model';
import { ParticipantesService } from 'src/app/shared/services/participantes.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  participantes: Participante[] = [];

  constructor(private participanteService: ParticipantesService) {
   }

  ngOnInit() {
    this.participanteService.getAll()
      .subscribe(result => {
        this.participantes = result;
      });
  }
}
