import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Student } from './student.model';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-form.html'
})
export class StudentFormComponent {
  private _model: Student | null = null;

  formModel: { name: string; age: number | null; major: string; active: boolean } = { name: '', age: null, major: '', active: true };

  @Input()
  set model(value: Student | null) {
    this._model = value;
    if (value) {
      this.formModel = { name: value.name, age: value.age, major: value.major, active: !!value.active };
    } else {
      this.formModel = { name: '', age: null, major: '', active: true };
    }
  }
  get model() {
    return this._model;
  }

  @Output() save = new EventEmitter<Omit<Student, 'id'> | Student>();
  @Output() cancel = new EventEmitter<void>();

  submit(f: NgForm) {
    if (f.invalid) return;
    const value = this.formModel;
    if (this._model && this._model.id) {
      const updated: Student = { id: this._model.id, name: value.name, age: Number(value.age || 0), major: value.major, active: !!value.active };
      this.save.emit(updated);
    } else {
      this.save.emit({ name: value.name, age: Number(value.age || 0), major: value.major, active: !!value.active });
    }
    f.resetForm();
    // reset local model to default
    this.model = null;
  }
}
