import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceItemComponent } from './components/device-item/device-item.component';
import { DeviceDescriptionComponent } from './components/device-description/device-description.component';
import { BookingsHistoryComponent } from './components/bookings-history/bookings-history.component';
import { DevicePropertiesComponent } from './components/device-properties/device-properties.component';
import { DropdownFilterComponent } from './components/dropdown-filter/dropdown-filter.component';

@NgModule({
  declarations: [
    DevicesComponent,
    DevicesListComponent,
    DeviceItemComponent,
    DeviceDescriptionComponent,
    BookingsHistoryComponent,
    DevicePropertiesComponent,
    DropdownFilterComponent
    ],
  imports: [
    CommonModule,
    DevicesRoutingModule
  ]
})
export class DevicesModule { }
