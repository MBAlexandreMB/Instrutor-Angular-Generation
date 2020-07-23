import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Turma } from 'src/app/shared/models/turma.model';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { ParticipantesService } from 'src/app/shared/services/participantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edita-participante',
  templateUrl: './editaParticipante.component.html',
  styleUrls: ['./editaParticipante.component.css']
})
export class EditaParticipanteComponent implements OnInit {
  form: FormGroup;
  turmas: Turma[] = [];
  errorMessage: String = null;

  constructor(
    private turmasService: TurmasService,
    private participantesService: ParticipantesService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      'nome': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'observacoes': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'turma': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    this.turmasService.getAll()
      .subscribe(result => {
        this.turmas = result;
      });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.participantesService.newParticipante(this.form.value);
      this.router.navigate(['/participantes']);
    } else {
      this.errorMessage = "Verifique os campos com erro antes de enviar!"
    }
  }

  checkIfValid() {
    if (this.form.valid) {
      this.errorMessage = null;
    }
  }

  closeToast() {
    this.errorMessage = null;
  }

  get nome(): FormControl {
    return this.form.get('nome') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get observacoes(): FormControl {
    return this.form.get('observacoes') as FormControl;
  }

  get turma(): FormControl {
    return this.form.get('turma') as FormControl;
  }
}
