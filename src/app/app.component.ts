import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, AsyncPipe } from '@angular/common';
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

  constructor() {}
}
