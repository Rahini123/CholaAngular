import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from './model/email';

@Injectable()
export class EmailService {
  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http
      .get<any>('assets/email.json')
      .toPromise()
      .then((res) => <Email[]>res.data)
      .then((data) => {
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
