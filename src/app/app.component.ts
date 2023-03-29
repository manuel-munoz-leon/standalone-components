import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, AsyncPipe } from '@angular/common';
import { Notifications } from './notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
  ],
})
export class AppComponent {
  title = 'standalone';
  // counter = 0;
  // interval = setInterval(() => this.addNotifications(), 1000);

  constructor() {}

  // addNotifications(): void {
  //   this.eventService.pushNotification(Notifications[this.counter]);
  //   console.log(this.counter);
  //   this.counter += 1;
  //   if (this.counter >= 12) {
  //     clearInterval(this.interval);
  //   }
  // }
}
