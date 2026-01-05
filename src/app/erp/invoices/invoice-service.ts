import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private http = inject(HttpClient);

  private apiUrl = 'https://dash3.yonkou.info/api/v1';

  get_invoices(month: number, year: number) {
    let data = {
      month: month,
      year: year,
    };

    return this.http.post(this.apiUrl + '/paid_invoices', data);
  }

  get_deposit(month: number, year: number) {
    let data = {
      month: month,
      year: year,
    };

    return this.http.post(this.apiUrl + '/get_month_deposit', data);
  }

  get_annual_invoices(year: number) {
    let data = { year: year, };

    return this.http.post(this.apiUrl + '/annual_paid_invoices', data);
  }

  get_annual_deposit(year: number) {
    let data = { year: year, };

    return this.http.post(this.apiUrl + '/get_annual_invoices_deposit', data);
  }
}
