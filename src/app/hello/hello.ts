import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})

export class HelloComponent {

  // types
  name: string = "Ossama";
  age: number = 23;

  // interface
  user: User = {
    id: 1,
    name: "Ossama"
  };

  // method
  sayHello(): string {
    return `Hello ${this.name}`;
  }
}

interface User {
  id: number;
  name: string;
}