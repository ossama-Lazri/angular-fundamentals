import { Component } from '@angular/core';
import { CounterComponent } from './counter/counter';
import { ToggleComponent } from './toggle/toggle';
import { InputComponent } from './input/input';
import { CalculatorComponent } from './calculator/calculator';
import { CardComponent } from './card/card';
import { TodoComponent } from './todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    ToggleComponent,
    InputComponent,
    CalculatorComponent,
    CardComponent,
    TodoComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}