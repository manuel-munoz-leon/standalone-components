import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { EventBusService } from '../../event-bus.service';
import { Notification, Notifications } from 'src/app/notifications';
import { tap } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MatBadgeModule, MatIconModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  Data: Notification[] = [];
  notifications$ = this.eventService.notifications$.pipe(
    tap((n) => this.Data.push(n))
  );
  constructor(private eventService: EventBusService) {}

  addMore(): void {
    this.eventService.pushNotifications(Notifications[0]);
  }
}
