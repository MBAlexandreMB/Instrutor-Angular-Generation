import { Component, OnInit, ElementRef, ViewChild, HostListener, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, NgControl } from '@angular/forms';
import { TurmasService } from 'src/app/shared/services/turmas.service';

@Component({
  selector: 'app-edita-turma',
  templateUrl: './editaTurma.component.html',
  styleUrls: ['./editaTurma.component.css']
})
export class EditaTurmaComponent implements OnInit {
  @ViewChild("toast", { read: ElementRef, static: true }) toast: ElementRef;

  form: FormGroup;
  errorMessage: String = null;

  constructor(private turmasService: TurmasService) {
    this.form = new FormGroup({
      'descricao': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'tipo': new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
   }

  ngOnInit() {
  }

  checkIfValid() {
    if (this.form.valid) {
      this.errorMessage = null;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.turmasService.newTurma(this.form.value);
    } else {
      this.errorMessage = 'Verifique os erros do formulário antes de enviar!';
    }
  }

  closeToast() {
    this.errorMessage = null;
  }

  get descricao(): FormControl {
    return this.form.get('descricao') as FormControl;
  }

  get tipo(): FormControl {
    return this.form.get('tipo') as FormControl;
  }
}
