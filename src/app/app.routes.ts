import { Routes } from '@angular/router';
import {CreateSecretComponent} from "./create-secret/create-secret.component";
import {RevealSecretComponent} from "./reveal-secret/reveal-secret.component";

export const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateSecretComponent },
  { path: 'secret/:id/:token', component: RevealSecretComponent },
];
