import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../config/config.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  config$ = this.config.config$;
  constructor(private config: ConfigService) {}
}
