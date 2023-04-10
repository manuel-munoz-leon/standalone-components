import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { map, Observable } from 'rxjs';
import { CacheService } from '../cache.service';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, MatCardModule, MatProgressBarModule],
})
export class TenantsComponent {
  apis$: Observable<Api[]> = this.genericService
    .fetchData<Entries>('https://api.publicapis.org/entries')
    .pipe(map((data: Entries) => data.entries.splice(0, 15)));

  cache$: Observable<Api[]> = this.cache
    .getResource('https://api.publicapis.org/entries')
    .pipe(map((data: Entries) => data.entries.splice(0, 15)));

  constructor(
    private genericService: GenericService,
    private cache: CacheService
  ) {}
}
