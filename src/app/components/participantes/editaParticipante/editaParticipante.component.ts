import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Turma } from 'src/app/shared/models/turma.model';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { ParticipantesService } from 'src/app/shared/services/participantes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Participante } from 'src/app/shared/models/participante.model';

@Component({
  selector: 'app-edita-participante',
  templateUrl: './editaParticipante.component.html',
  styleUrls: ['./editaParticipante.component.css']
})
export class EditaParticipanteComponent implements OnInit {
  form: FormGroup;
  turmas: Turma[] = [];
  errorMessage: String = null;
  participanteAtivo: Participante;

  constructor(
    private turmasService: TurmasService,
    private participantesService: ParticipantesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    const { id, modo } = this.route.snapshot.params;
    if (modo === 'editar' && id) {
      this.participantesService.getOne(parseInt(id))
      .subscribe(result => {
          this.participanteAtivo = result;
          this.setForm();
        });
    } else {
      this.participanteAtivo = {
        id: null,
        nome: '',
        email: '',
        observacoes: '',
        turma: null,
      };
      
      this.setForm();
    }
  }

  ngOnInit() {

    this.turmasService.getAll()
      .subscribe(result => {
        this.turmas = result;
      });
  }

  private setForm() {
    this.form = new FormGroup({
      'nome': new FormControl(
        this.participanteAtivo.nome,
        [Validators.required, Validators.minLength(3)]
      ),
      'email': new FormControl(
        this.participanteAtivo.email,
        [Validators.required, Validators.email]
      ),
      'observacoes': new FormControl(
        this.participanteAtivo.observacoes,
        [Validators.required, Validators.minLength(3)]
      ),
      'turma': new FormControl(
        this.participanteAtivo.turma,
        Validators.required
      ),
    });
    console.log('setei form');
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const novoParticipante = {
        ...this.form.value,
        turma: this.turmas.find(turma => turma.id == this.form.value['turma'])
      }

      console.log(novoParticipante);
      this.participantesService.newParticipante(novoParticipante);
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
