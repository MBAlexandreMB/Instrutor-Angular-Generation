import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TurmasService } from 'src/app/shared/services/turmas.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-edita-turma',
  templateUrl: './editaTurma.component.html',
  styleUrls: ['./editaTurma.component.css']
})
export class EditaTurmaComponent implements OnInit {
  form: FormGroup;

  constructor(
    private turmasService: TurmasService,
    private toastService: ToastService,  
  ) {
    this.form = new FormGroup({
      'descricao': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'tipo': new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.turmasService.newTurma(this.form.value);
      this.form.reset();
    } else {
      this.toastService.show(
        'Erro',
        "Verifique os campos com erro antes de enviar!",
        'text-danger'
      );
    }
  }

  get descricao(): FormControl {
    return this.form.get('descricao') as FormControl;
  }

  get tipo(): FormControl {
    return this.form.get('tipo') as FormControl;
  }
}
