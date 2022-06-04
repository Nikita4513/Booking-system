import { Component, Input, OnInit } from '@angular/core';
import { IBooking } from 'src/app/modules/account/models/interfaces';
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
  @Input()bookings!: IBooking[];

  constructor(
  ) {
  }
  
  ngOnInit(): void {
  }

  public get lastBooking() : IBooking {
    return this.bookings[this.bookings.length - 1];
  }

  public onCancel() : void {
    const modal = document.getElementById(`my_modal-${this.id}`);
    if (modal) {
      modal.style.display = "block";
    }
  }

  public onCloseModal() : void {
    const modal = document.getElementById(`my_modal-${this.id}`);
    if (modal) {
      modal.style.display = "none";
    }
  }
}
