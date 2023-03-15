import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

export const REPORTS_ROUTES: Routes = [
  {
    path: 'list',
    component: ListComponent,
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
