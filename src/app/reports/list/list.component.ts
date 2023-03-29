import { Component } from '@angular/core';
import { CommonModule, AsyncPipe, JsonPipe } from '@angular/common';
import { ConfigService } from 'src/app/config/config.service';
import { EventBusService } from '../../event-bus.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, AsyncPipe, JsonPipe],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  config$ = this.configService.config$;
  notifications$ = this.eventService.notifications$;
  constructor(
    private configService: ConfigService,
    private eventService: EventBusService
  ) {}
}
