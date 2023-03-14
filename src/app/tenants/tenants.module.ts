import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TenantsComponent],
  imports: [CommonModule, TenantsRoutingModule, MatCardModule],
})
export class TenantsModule {}
