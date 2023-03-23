import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
  private _toggleToolbarSub: Subject<boolean> = new Subject<boolean>();
  toogleToolbar$: Observable<boolean> = this._toggleToolbarSub.asObservable();

  constructor() {}

  toggleView(value: boolean): void {
    this._toggleToolbarSub.next(value);
  }
}
