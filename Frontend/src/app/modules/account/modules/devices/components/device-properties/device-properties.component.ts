import { Component, Input, OnInit } from '@angular/core';
import { IDevice } from '../../models/interfaces';

@Component({
  selector: 'app-device-properties',
  templateUrl: './device-properties.component.html',
  styleUrls: ['./device-properties.component.css']
})
export class DevicePropertiesComponent implements OnInit {
  @Input() device!: IDevice;
  constructor() { }

  ngOnInit(): void {
  }

}
