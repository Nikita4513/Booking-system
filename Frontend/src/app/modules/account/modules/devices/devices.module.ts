import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceItemComponent } from './components/device-item/device-item.component';

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesListComponent,
    DeviceItemComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
  ]
})
export class DevicesModule { }
