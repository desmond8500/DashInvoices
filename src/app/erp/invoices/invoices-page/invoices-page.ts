import { Component, inject, signal } from '@angular/core';
import { InvoiceService } from '../invoice-service';
import { MainService } from '../../../services/main-service';
import { InvoiceCard } from '../invoice-card/invoice-card';

@Component({
  selector: 'app-invoices-page',
  imports: [InvoiceCard],
  templateUrl: './invoices-page.html',
  styleUrl: './invoices-page.css',
})
export class InvoicesPage {
  main_service = inject(MainService);
  invoice_service = inject(InvoiceService);
  title = signal('');

  factures = signal<any>('');
  deposits = signal<any>('');
  total = signal<any>('');

  months = [
    { label: 'Janvier', value: 1 },

    { label: 'Février', value: 2 },

    { label: 'Mars', value: 3 },

    { label: 'Avril', value: 4 },

    { label: 'Mai', value: 5 },

    { label: 'Juin', value: 6 },

    { label: 'Juillet', value: 7 },

    { label: 'Août', value: 8 },

    { label: 'Septembre', value: 9 },

    { label: 'Octobre', value: 10 },

    { label: 'Novembre', value: 11 },

    { label: 'Décembre', value: 12 },
  ];

  getMonth(month: any, year: number) {
    this.invoice_service.get_invoices(month, year).subscribe({
      next: (value) => {
        this.factures.set(value);
        //  console.log('facture' + value);
        this.title.set(this.months[month - 1].label);
      },
      error: (err) => console.error(err),
      // complete: () => console.log('DONE!'),
    });
  }

  get_month_deposit() {
    this.invoice_service.get_deposit(1, 2025).subscribe({
      next: (value) => {
        this.factures.set([]);
        this.deposits.set(value);
        console.log('deposit' + value);
      },
      error: (err) => console.error(err),
    });
  }
}
