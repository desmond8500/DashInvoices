import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-invoice-card',
  imports: [CommonModule],
  templateUrl: './invoice-card.html',
  styleUrl: './invoice-card.css',
})
export class InvoiceCard {
  facture = input<any>();
}
