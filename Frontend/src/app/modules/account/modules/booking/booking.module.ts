import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookDeviceComponent } from './components/book/book.component';
import { BookingService } from './services/booking.service';
import { AddDeviceComponent } from './components/add-device/add-device.component';


@NgModule({
  declarations: [
    BookingComponent,
    BookDeviceComponent,
    AddDeviceComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  providers: [
    BookingService
  ]
})
export class BookingModule { }
