import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // imports: [ButtonModule],
})
export class AppComponent {
  title = 'DashInvoices';
}
