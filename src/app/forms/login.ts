import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {
  email = '';
  password = '';
  submitted = false;
  error = '';

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.error = '';
    if (form.invalid) return;

    // Simple demo auth check (not for production)
    if (this.email === 'user@example.com' && this.password === 'password') {
      console.log('Login successful', { email: this.email });
      this.error = '';
      form.resetForm();
      this.submitted = false;
    } else {
      this.error = 'Invalid credentials — try user@example.com / password';
    }
  }
}
