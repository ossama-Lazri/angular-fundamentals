import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  standalone: true,
  templateUrl: './toggle.html'
})
export class ToggleComponent {

  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
}