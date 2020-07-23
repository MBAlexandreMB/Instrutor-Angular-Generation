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

  constructor(private participantesService: ParticipantesService) {
   }

  ngOnInit() {
    this.participantesService.participantes
      .subscribe(result => {
        this.participantes = result;
      });

    this.participantesService.getAll()
      .subscribe();
  }

  onDelete(id: number) {
    console.log('eu deletaria o participante', id);
    this.participantesService.delete(id);
  }
}
