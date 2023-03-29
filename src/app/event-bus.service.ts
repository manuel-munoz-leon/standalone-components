import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Notification } from './notifications';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private toggleViewSub: Subject<boolean> = new Subject<boolean>();
  toggleView$: Observable<boolean> = this.toggleViewSub.asObservable();

  private pushNotificationSub = new ReplaySubject<Notification>(4);
  notifications$ = this.pushNotificationSub.asObservable();

  constructor() {}

  toggleMobileView(value: boolean): void {
    this.toggleViewSub.next(value);
  }

  pushNotification(value: Notification): void {
    this.pushNotificationSub.next(value);
  }
}
