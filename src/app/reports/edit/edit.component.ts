import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { EventBusService } from 'src/app/event-bus.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  isChecked = false;

  constructor(private eventService: EventBusService) {}

  toggle(state: boolean): void {
    console.log(`Mobile view state ${state}`);
    this.eventService.toggleView(state);
  }
}
