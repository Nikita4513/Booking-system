import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { IDevice, IDevices } from './models/interfaces';
import { DevicesService } from './services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices: IDevice[] = [];

  constructor(
    private devicesService: DevicesService,
  ) {
    this.devicesService.getAllDevices().subscribe(d => {
      this.devices = d;
    })
   
  }

  ngOnInit(): void {
  }

}
