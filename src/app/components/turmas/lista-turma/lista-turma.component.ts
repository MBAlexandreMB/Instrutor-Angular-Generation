import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { Turma } from 'src/app/shared/models/turma.model';

@Component({
  selector: 'app-lista-turma',
  templateUrl: './lista-turma.component.html',
  styleUrls: ['./lista-turma.component.css']
})
export class ListaTurmaComponent implements OnInit {
  turmas: Turma[] = [];
  algumParticipante: boolean = false;

  constructor(private turmaService: TurmasService) { }

  ngOnInit() {
    this.turmaService.turmas
      .subscribe(result => {
        this.turmas = result;
        this.checkForParticipants();
      });

    this.turmaService.getAll()
      .subscribe();
  }

  private checkForParticipants() {
    this.algumParticipante = this.turmas.some(turma => turma.participantes.length > 0);
  }

}
