import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookDeviceComponent } from './components/book/book.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookingComponent,
    BookDeviceComponent,
    AddDeviceComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BookingRoutingModule
  ],
  providers: [
  ]
})
export class BookingModule { }
