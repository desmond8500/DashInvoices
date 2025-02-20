import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menus = [
    { name: 'Accueil', icon: 'home', route: 'index' },
    { name: 'Factures', icon: 'file-invoice', route: 'factures' },
    { name: 'Achats', icon: 'wallet', route: 'achats' },
    { name: 'Redevances', icon: 'moneybag', route: 'dettes' },
    { name: 'Réglages', icon: 'settings', route: 'settings' },
  ];
}
