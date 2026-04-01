import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent],
  templateUrl: './app.html'
})
export class AppComponent {}