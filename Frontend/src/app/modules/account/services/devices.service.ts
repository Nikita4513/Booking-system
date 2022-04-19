import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDevice, IDevices } from '../models/interfaces';
import { map, Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';


@Injectable()
export class DevicesService {
  devices!: IDevices;

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {
      this.getAllDevices();
   }


   public getAllDevices() : Observable<IDevice[]>{
    const url = `https://${this.accountService.host}/device/not-booked`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice[]>(url, options);
  }

  public getDeviceById(id: number) : Observable<IDevice> {
    const url = `https://${this.accountService.host}/device/${id}`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice>(url, options);
  }
}
