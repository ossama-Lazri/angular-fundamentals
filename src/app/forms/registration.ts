import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.html'
})
export class RegistrationComponent {
  model: RegistrationData = { name: '', email: '', password: '', acceptTerms: false };
  submitted = false;
  successMessage = '';

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      // Simulate saving
      this.successMessage = `Registered ${this.model.name} — check console for payload`;
      console.log('Registration payload:', this.model);
      // reset form while keeping a friendly message
      form.resetForm({ name: '', email: '', password: '', acceptTerms: false });
      this.model = { name: '', email: '', password: '', acceptTerms: false };
      this.submitted = false;
    }
  }
}
