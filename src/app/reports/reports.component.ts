import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CacheService } from '../cache.service';
import { tap } from 'rxjs';
import { NgIf, AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgIf, AsyncPipe],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  url = 'https://api.publicapis.org/entries';
  cache$ = this.cache
    .getResource(this.url)
    .pipe(tap((data) => console.log(`Cache data : ${data.count}`)));

  constructor(private cache: CacheService) {}
}
