import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {
  }
  ngOnInit(): void {
  }

  // book(e: Event) {
  //   this.router.navigate(['../booking/book']);
  // }
}
