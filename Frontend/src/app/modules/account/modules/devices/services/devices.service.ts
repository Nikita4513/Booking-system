import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDevice, IDevices } from '../models/interfaces';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices!: IDevices;

  constructor(
    private http: HttpClient
  ) {
      this.getAllDevices();
   }

  getAllDevices() {
    const url = 'https://localhost:44382/device/not-booked';
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice[]>(url, options);
  }
}
