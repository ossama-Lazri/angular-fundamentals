import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html'
})
export class CounterComponent {

  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}