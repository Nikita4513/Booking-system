import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { IBookingData } from '../models/interfaces';

@Injectable()
export class BookingService {
  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) { }

  public bookDevice(body: IBookingData) {
    const url: string = `https://${this.accountService.host}/device/${body.id}/book`;
    const options = {
      withCredentials: true
    }
    return this.http.post(url, body, options);
  }
}


