import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookDeviceComponent } from './components/book/book.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { LibsModule } from 'src/libs/libs/libs.module';
import { AlertComponent } from 'src/libs/libs/alert/alert.component';


@NgModule({
  declarations: [
    BookingComponent,
    BookDeviceComponent,
    AddDeviceComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BookingRoutingModule,
    LibsModule
  ],
  providers: [
  ]
})
export class BookingModule { }
