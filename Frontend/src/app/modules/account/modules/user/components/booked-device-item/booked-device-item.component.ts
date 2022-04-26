import { Component, Input, OnInit } from '@angular/core';
import { DevicesComponent } from '../../../devices/devices.component';

@Component({
  selector: 'app-booked-device-item',
  templateUrl: './booked-device-item.component.html',
  styleUrls: ['./booked-device-item.component.css']
})
export class BookedDeviceItemComponent implements OnInit {
  @Input()id!: number;
  @Input()name!: string;
  @Input()year!: number;
  @Input()description!: string;

  constructor(
  ) {
  }
  ngOnInit(): void {
  }
}
