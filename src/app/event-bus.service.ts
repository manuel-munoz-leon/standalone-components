import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { Subject } from 'rxjs/internal/Subject';
import { Notification } from './notifications';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private _toggleViewSub = new Subject<boolean>();
  mobileView$ = this._toggleViewSub.asObservable();

  private notificationSub = new ReplaySubject<Notification>(4);
  notifications$ = this.notificationSub.asObservable();

  constructor() {}

  toggleView(value: boolean): void {
    this._toggleViewSub.next(value);
  }

  pushNotifications(noti: Notification): void {
    this.notificationSub.next(noti);
  }
}
