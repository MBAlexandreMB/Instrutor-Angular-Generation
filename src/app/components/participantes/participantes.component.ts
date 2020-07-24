import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from 'src/app/shared/components/message/message.component';

import { Participante } from 'src/app/shared/models/participante.model';
import { ParticipantesService } from 'src/app/shared/services/participantes.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {
  participantes: Participante[] = [];

  constructor(
    private participantesService: ParticipantesService,
    private dialog: MatDialog,
    ) {
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
    const dialogRef = this.dialog.open(
      MessageComponent, {
      data: {
        text: 'Deseja realmente apagar esse participante?',
        options: 'yn'
      }
    });
    
    dialogRef.afterClosed().subscribe(resposta => {
      if (resposta) {
        this.participantesService.delete(id);
      }
    });
  }
}
