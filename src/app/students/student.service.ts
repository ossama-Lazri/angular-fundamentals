import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from './student.model';

const STORAGE_KEY = 'af_students_v1';

@Injectable({ providedIn: 'root' })
export class StudentService {
  private students$ = new BehaviorSubject<Student[]>(this.load());

  getAll() {
    return this.students$.asObservable();
  }

  snapshot(): Student[] {
    return this.students$.getValue();
  }

  add(student: Omit<Student, 'id'>) {
    const list = this.snapshot();
    const nextId = list.length ? Math.max(...list.map(s => s.id)) + 1 : 1;
    const newStudent: Student = { id: nextId, ...student };
    const next = [...list, newStudent];
    this.save(next);
    this.students$.next(next);
    return newStudent;
  }

  update(updated: Student) {
    const next = this.snapshot().map(s => s.id === updated.id ? updated : s);
    this.save(next);
    this.students$.next(next);
  }

  delete(id: number) {
    const next = this.snapshot().filter(s => s.id !== id);
    this.save(next);
    this.students$.next(next);
  }

  clear() {
    this.save([]);
    this.students$.next([]);
  }

  private save(list: Student[]) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.warn('Failed to persist students', e);
    }
  }

  private load(): Student[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return this.seed();
      return JSON.parse(raw) as Student[];
    } catch (e) {
      return this.seed();
    }
  }

  private seed(): Student[] {
    const seed: Student[] = [
      { id: 1, name: 'Alice Johnson', age: 20, major: 'Computer Science', active: true },
      { id: 2, name: 'Ben Carter', age: 22, major: 'Mathematics', active: true },
      { id: 3, name: 'Clara Smith', age: 19, major: 'Physics', active: false }
    ];
    this.save(seed);
    return seed;
  }
}
