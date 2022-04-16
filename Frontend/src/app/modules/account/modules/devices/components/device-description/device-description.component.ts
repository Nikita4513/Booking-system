import { Component, OnInit, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDevice } from '../../models/interfaces';
import { DevicesService } from '../../services/devices.service';

@Component({
  selector: 'app-device-description',
  templateUrl: './device-description.component.html',
  styleUrls: ['./device-description.component.css']
})
export class DeviceDescriptionComponent implements OnInit {
  id!: number;
  device: IDevice = { name: "", id: this.id, year: 0, description: '', bookings: [] };
  constructor(
    private devicesService: DevicesService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.devicesService.getDeviceById(this.id)
      .pipe()
      .subscribe(device => {
        this.device = device;
        console.log(this.device); 
      });
  }

  get isHistoryEmpty() {
    return this.device.bookings.length === 0;
  }

}
