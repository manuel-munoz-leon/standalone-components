import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { EventBusService } from '../../event-bus.service';
import { Notification, Notifications } from 'src/app/notifications';
import { tap } from 'rxjs/internal/operators/tap';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    AsyncPipe,
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  Data: Notification[] = [];
  subscription: Subscription = new Subscription();
  extraNoti$ = this.eventService.notifications$;
  notifications$ = this.eventService.notifications$.pipe(
    tap((n) => {
      this.Data.push(n);
    })
  );

  constructor(private eventService: EventBusService) {
    console.log('Details mount');
  }

  addMore(): void {
    this.eventService.pushNotification(Notifications[0]);
    this.subscription.add(
      this.extraNoti$.subscribe((res) => this.Data.push(res))
    );
  }
}
