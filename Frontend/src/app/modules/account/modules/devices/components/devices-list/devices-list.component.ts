import { Component, Input, OnInit } from '@angular/core';
import { IDevice } from '../../models/interfaces';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {
  devices!: IDevice[];
  constructor(
    private deviceService: DevicesService
  ) {
    deviceService.getAllDevices().subscribe(devices => {
      this.devices = devices;
    });
  }

  ngOnInit(): void {
  }

}
