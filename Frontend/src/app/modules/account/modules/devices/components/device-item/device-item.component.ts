import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-item',
  templateUrl: './device-item.component.html',
  styleUrls: ['./device-item.component.css']
})
export class DeviceItemComponent implements OnInit {
  @Input()id!: number;
  @Input()name!: string;
  @Input()year!: number;
  @Input()description!: string;

  constructor() {
  }
  ngOnInit(): void {
  }

}
