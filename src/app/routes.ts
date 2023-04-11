import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenericService } from './generic.service';
import { SignalsComponent } from './signals/signals.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component').then((m) => m.UsersComponent),
  },
  {
    path: 'tenants',
    loadComponent: () =>
      import('./tenants/tenants.component').then((m) => m.TenantsComponent),
    canActivate: [() => inject(GenericService).isAuthorized()],
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('./reports/reports.component').then((m) => m.ReportsComponent),
    loadChildren: () => import('./reports/reports.routes'),
  },
  {
    path: 'signals',
    component: SignalsComponent,
  },
];
