import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineLatest } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  counter = 0;

  title1$: BehaviorSubject<string> = new BehaviorSubject('Reactive');
  title2$: BehaviorSubject<string> = new BehaviorSubject('Programming');

  headline$: Observable<string> = combineLatest([
    this.title1$,
    this.title2$,
  ]).pipe(
    tap(() => this.counter++),
    map(([title1, title2]) => `${title1} ${title2}`)
  );

  changeTitle(): void {
    this.title1$.next('Angular');
    this.title2$.next('Singals');
  }
}
