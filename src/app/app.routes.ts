import { Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexPageComponent },
];
