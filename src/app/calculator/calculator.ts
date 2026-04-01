import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule], // 👈 REQUIRED
  templateUrl: './calculator.html'
})
export class CalculatorComponent {

  a = 0;
  b = 0;
  result = 0;

  add() {
    this.result = Number(this.a) + Number(this.b);
  }
}