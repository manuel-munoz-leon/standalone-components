import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GenericService } from '../generic.service';

type Entries = {
  count: number;
  entries: Api[];
};
export interface Api {
  API: string;
  Description: string;
  Auth?: string;
  HTTPS: boolean;
  Cors: boolean;
  Link: string;
  Category: string;
}

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss'],
})
export class TenantsComponent {
  apis$: Observable<Api[]> = this.genericService
    .fetchData<Entries>('https://api.publicapis.org/entries')
    .pipe(map((data: Entries) => data.entries.splice(0, 15)));

  constructor(private genericService: GenericService) {}
}
