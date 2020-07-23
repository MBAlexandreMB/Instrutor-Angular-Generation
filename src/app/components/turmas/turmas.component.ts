import { Component, OnInit } from '@angular/core';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { Turma } from 'src/app/shared/models/turma.model';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.component.html',
  styleUrls: ['./turmas.component.css']
})
export class TurmasComponent implements OnInit {
  turmas: Turma[] = [];

  constructor(private turmaService: TurmasService) { }

  ngOnInit() {
    this.turmaService.getAll()
      .subscribe(result => {
        this.turmas = result;
      })
  }

}
