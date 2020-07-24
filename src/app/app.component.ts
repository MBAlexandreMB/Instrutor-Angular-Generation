import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoImages = {
    facebook: {
      false: '../assets/f_logo_white.png',
      true: '../assets/f_logo_blue.png',
    },
    instagram: {
      false: '../assets/i_logo_white.png',
      true: '../assets/i_logo_color.png',
    },
    linkedin: {
      false: '../assets/l_logo_white.png',
      true: '../assets/l_logo_blue.png',
    },
  }
}
