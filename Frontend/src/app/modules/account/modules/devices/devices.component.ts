import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  items: string[];

  constructor() { 
    this.items = new Array<string>();
    for (let i=0; i<100; i++) {
      this.items.push(`устройство номер ${i}`);
    }
  }

  ngOnInit(): void {
  }

}
