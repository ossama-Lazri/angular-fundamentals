import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';

interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './todo.html'
})
export class TodoComponent {
  todos: TodoItem[] = [
    { id: 1, title: 'Learn *ngFor', done: false },
    { id: 2, title: 'Practice *ngIf', done: true },
    { id: 3, title: 'Use ngClass & ngStyle', done: false }
  ];

  showAdd = false;
  newTitle = '';
  nextId = 4;

  toggleShow() {
    this.showAdd = !this.showAdd;
  }

  add() {
    const title = this.newTitle.trim();
    if (!title) return;
    this.todos = [...this.todos, { id: this.nextId++, title, done: false }];
    this.newTitle = '';
    this.showAdd = false;
  }

  remove(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  toggleDone(item: TodoItem) {
    item.done = !item.done;
  }

  trackById(_index: number, item: TodoItem) {
    return item.id;
  }
}
