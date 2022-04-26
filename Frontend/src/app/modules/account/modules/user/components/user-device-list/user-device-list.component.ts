import { Component, OnInit } from '@angular/core';
import { IDevice } from 'src/app/modules/account/models/interfaces';
import { DevicesService } from 'src/app/modules/account/services/devices.service';

@Component({
  selector: 'app-user-device-list',
  templateUrl: './user-device-list.component.html',
  styleUrls: ['./user-device-list.component.css']
})
export class UserDeviceListComponent implements OnInit {

  userDevices: IDevice[] = []
  constructor(
    private devicesService: DevicesService
  ) {
   }

  ngOnInit(): void {
    this.devicesService.getUserDevices()
      .pipe()
      .subscribe(devices => this.userDevices = devices);
  }

}
