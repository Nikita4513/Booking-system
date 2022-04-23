import { Component, OnInit } from '@angular/core';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-booked-devices-list',
  templateUrl: './booked-devices-list.component.html',
  styleUrls: ['./booked-devices-list.component.css']
})
export class BookedDevicesListComponent implements OnInit {

  bookedDevices: IDevice[] = []
  constructor(
    private devicesService: DevicesService
  ) { }

  ngOnInit(): void {
    this.devicesService.getUserDevices()
      .pipe()
      .subscribe(devices => this.bookedDevices = devices)
  }

}
