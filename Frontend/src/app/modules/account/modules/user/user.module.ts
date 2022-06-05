import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { BookedDevicesListComponent } from './components/booked-devices-list/booked-devices-list.component';
import { BookedDeviceItemComponent } from './components/booked-device-item/booked-device-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserDeviceListComponent } from './components/user-device-list/user-device-list.component';
import { AlertComponent } from 'src/libs/libs/alert/alert.component';
import { LibsModule } from 'src/libs/libs/libs.module';


@NgModule({
  declarations: [
    UserComponent,
    BookedDevicesListComponent,
    BookedDeviceItemComponent,
    UserInfoComponent,
    UserDeviceListComponent,
    // AlertComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    LibsModule
  ]
})
export class UserModule { }
