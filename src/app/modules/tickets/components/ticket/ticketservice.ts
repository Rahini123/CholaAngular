import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Insurance } from './modal/ticket';


@Injectable()
export class TicketService {
  constructor(private http: HttpClient) {}

  getTickets() {
    // return this.http
    //   .get<any>('assets/tickets.json')
    //   .toPromise()
    //   .then((res) => <Insurance[]>res.data)
    //   .then((data) => {
    //     console.log(data);
    //     return data;
    //   });
    let url = `/LoanProfitPortal/api/auth/getBand1Details`;
    console.log(url);
    return this.http.get(url);
  }

  getRecords()
  {
    return this.http.get<any>(`/LoanProfitPortal/api/auth/getBand1Details`)
    .toPromise()
    .then((res) => <Insurance[]>res.data)
    .then((data) => {
      console.log(data);
      return data;
    });
  }

  generateId() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
