import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { BookDeviceComponent } from './components/book/book.component';

const routes: Routes = [
  { path: 'book/:id', component: BookDeviceComponent },
  { path: "add", component: AddDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
