import { Routes } from '@angular/router';
import { InvoicesPage } from './erp/invoices/invoices-page/invoices-page';

export const routes: Routes = [
  { path: '', redirectTo: 'invoices-page', pathMatch: 'full' },
  { path: 'invoices-page', component: InvoicesPage },
];
