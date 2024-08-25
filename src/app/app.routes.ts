import { Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DevisComponent } from './components/devis/devis.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'devis', component: DevisComponent},
];
