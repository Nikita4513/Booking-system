import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IDevice, IDevices } from '../models/interfaces';
import { map, Observable, of } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
import { IAddDeviceData, IBookDeviceData, IBookDeviceResponse } from '../modules/booking/models/interfaces';

@Injectable()
export class DevicesService {

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

  public getBookedDevices() : Observable<IDevice[]>{
    const url = `https://${this.accountService.host}/device/my-bookings`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice[]>(url, options);
  }

  public getUserDevices() : Observable<IDevice[]>{
    return of([]); //TODO: Добавить метод получения добавленных пользователем бутылок
  }

  public getDeviceById(id: number) : Observable<IDevice> {
    const url = `https://${this.accountService.host}/device/${id}`;
    const options = {
      withCredentials: true
    }
    return this.http.get<IDevice>(url, options);
  }

  public addDevice(data: IAddDeviceData) :Observable<void> {
    const url = `https://${this.accountService.host}/device`;
    return this.http.post<void>(url, data, {
      withCredentials: true
    })
  }

  public bookDevice(data: IBookDeviceData) : Observable<IBookDeviceResponse> {
    const url = `https://${this.accountService.host}/device/${data.id}/book`;
    return this.http.post<IBookDeviceResponse>(url, data, {
      withCredentials: true
    })
  }
}
