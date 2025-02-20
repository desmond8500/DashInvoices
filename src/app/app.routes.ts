import { Routes } from '@angular/router';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { FacturesPageComponent } from './pages/factures-page/factures-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DettesPageComponent } from './pages/dettes-page/dettes-page.component';
import { AchatsPageComponent } from './pages/achats-page/achats-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexPageComponent },
  { path: 'factures', component: FacturesPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'dettes', component: DettesPageComponent },
  { path: 'achats', component: AchatsPageComponent },
  { path: 'settings', component: SettingsPageComponent },

];
