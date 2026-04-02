import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html'
})
export class StudentListComponent {
  @Input() students: Student[] = [];
  @Output() edit = new EventEmitter<Student>();
  @Output() remove = new EventEmitter<number>();

  trackById(_i: number, s: Student) { return s.id; }
}
