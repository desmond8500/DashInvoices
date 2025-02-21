import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-factures-page',
  imports: [],
  templateUrl: './factures-page.component.html',
  styleUrl: './factures-page.component.scss',
})
export class FacturesPageComponent {
  server = 'https://dash3.yonkou.info/api/v1';
  factures = resource({
    loader: () => fetch(this.server+'/factures').then((response) => response.json()),
  });
}
