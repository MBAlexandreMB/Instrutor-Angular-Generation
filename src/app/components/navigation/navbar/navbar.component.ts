import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private classToRemove = null; 

  constructor() { }

  routeSelected(event) {
    if(this.classToRemove) {
      this.classToRemove.classList.remove('active');
    }

    event.target.classList.add('active');
    this.classToRemove = event.target;
  }
  
}
