import { Component, Input, OnInit } from '@angular/core';
import { IDevice } from '../../models/interfaces';

@Component({
  selector: 'app-bookings-history',
  templateUrl: './bookings-history.component.html',
  styleUrls: ['./bookings-history.component.css']
})
export class BookingsHistoryComponent implements OnInit {
  @Input() device!: IDevice;
  constructor() { }

  ngOnInit(): void {
  }

}
