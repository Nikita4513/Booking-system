import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BookedDevicesListComponent } from './components/booked-devices-list/booked-devices-list.component';
import { DeviceItemComponent } from './components/booked-device-item/booked-device-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserDeviceListComponent } from './components/user-device-list/user-device-list.component';


@NgModule({
  declarations: [
    UserComponent,
    BookedDevicesListComponent,
    DeviceItemComponent,
    UserInfoComponent,
    UserDeviceListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
