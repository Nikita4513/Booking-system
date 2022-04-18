import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-book-device',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookDeviceComponent implements OnInit {

  id!: number;
  device: IDevice = { name: "", id: this.id, year: 0, description: '', bookings: [] };

  constructor(
    private route: ActivatedRoute,
    private devicesService: DevicesService,
    private bookingService: BookingService
  ) {
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.devicesService.getDeviceById(this.id).pipe()
      .subscribe(device => {
        this.device = device;
      })
  }

  onBook() {
    // this.bookingService.bookDevice(this.id).pipe()
    //   .subscribe(response => {
    //     response;
    //   }, error => {

    //   });
  }

  get today(): string {
    return new Date().toISOString().split("T")[0];
  }
}
