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
  modo: String = 'cadastrar';

  constructor(
    private turmasService: TurmasService,
    private participantesService: ParticipantesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.participanteAtivo = {
      id: null,
      nome: '',
      email: '',
      observacoes: '',
      turma: null,
    };
    
    this.setForm();
  }

  ngOnInit() {
    this.turmasService.getAll()
      .subscribe(result => {
        this.turmas = result;
      });
    
    // Verifica a mudança de rota e adapta o formulário às mudanças
    this.route.params.subscribe(params => {
      const { id, modo } = params;
      this.modo = modo;

      if (this.modo === 'editar' && id) {
        this.participantesService.getOne(parseInt(id))
        .subscribe(result => {
            this.participanteAtivo = result;
            this.setForm();
          });
      } else {
        this.form.reset();
      }
    })
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
        null,
        Validators.required
      ),
    });
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const info = {
        ...this.form.value,
        turma: this.turmas.find(turma => turma.id == this.form.value['turma'])
      }

      if (this.route.snapshot.params.modo === 'cadastrar') {
        this.participantesService.newParticipante(info);
      } else {
        info.id = this.participanteAtivo.id;
        this.participantesService.changeParticipante(info);
      }
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
