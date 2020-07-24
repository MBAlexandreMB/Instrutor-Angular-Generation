import { Component, Input } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input('class') inputClasses: String = '';

  constructor(private toastService: ToastService) {}
}
