import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-demo.html'
})
export class ReactiveDemoComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    console.log('Reactive form value:', this.form.value);
    alert('Reactive form submitted — check console');
    this.form.reset({ email: '', password: '', remember: false });
  }
}
