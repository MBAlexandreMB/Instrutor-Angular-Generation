import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  show(header: string, body: string, classes: String = '') {
    this.toasts.push({ header, body, classes });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}