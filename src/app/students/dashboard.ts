import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { StudentListComponent } from './student-list';
import { StudentFormComponent } from './student-form';
import { Student } from './student.model';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, StudentListComponent, StudentFormComponent],
  templateUrl: './dashboard.html'
})
export class StudentDashboardComponent {
  students: Student[] = [];
  filtered: Student[] = [];
  search = '';
  filter: 'all' | 'active' | 'inactive' = 'all';
  editing: Student | null = null;

  constructor(private svc: StudentService) {
    this.svc.getAll().subscribe(list => {
      this.students = list;
      this.applyFilter();
    });
  }

  applyFilter() {
    const term = this.search.trim().toLowerCase();
    this.filtered = this.students.filter(s => {
      if (this.filter === 'active' && !s.active) return false;
      if (this.filter === 'inactive' && s.active) return false;
      if (!term) return true;
      return s.name.toLowerCase().includes(term) || s.major.toLowerCase().includes(term);
    });
  }

  onAdd(payload: Omit<Student, 'id'>) {
    this.svc.add(payload);
    this.editing = null;
  }

  onEdit(payload: Student) {
    this.svc.update(payload);
    this.editing = null;
  }

  startEdit(s: Student) {
    // create shallow copy to avoid two-way changes before save
    this.editing = { ...s };
  }

  onRemove(id: number) {
    if (!confirm('Delete this student?')) return;
    this.svc.delete(id);
  }

  onCancel() {
    this.editing = null;
  }

  onSave(payload: Student | Omit<Student, 'id'>) {
    // if payload has id -> edit, otherwise add
    if ((payload as Student).id) {
      this.onEdit(payload as Student);
    } else {
      this.onAdd(payload as Omit<Student, 'id'>);
    }
  }

  clearAll() {
    if (!confirm('Clear all students?')) return;
    this.svc.clear();
  }
}
