import { Component, OnInit } from '@angular/core';
import { IDevice } from '../../models/interfaces';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
