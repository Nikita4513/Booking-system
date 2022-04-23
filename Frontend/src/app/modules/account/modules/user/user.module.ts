import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BookedDevicesListComponent } from './components/booked-devices-list/booked-devices-list.component';
import { BookedDeviceItemComponent } from './components/booked-device-item/booked-device-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
  declarations: [
    UserComponent,
    BookedDevicesListComponent,
    BookedDeviceItemComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
