import { ENVIRONMENT_INITIALIZER, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const REPORTS_ROUTES: Routes = [
  {
    path: 'list',
    component: ListComponent,
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        multi: true,
        useValue: () => inject(ConfigService).loadConfig().subscribe(),
      },
    ],
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
];

export default REPORTS_ROUTES;
