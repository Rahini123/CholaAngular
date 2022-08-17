import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailNotify } from './modal/email-notify';

@Injectable()
export class EmailNotifyService {
  constructor(private http: HttpClient) {}

  getEmailNotifys() {
    return this.http
      .get<any>('assets/email_notification.json')
      .toPromise()
      .then((res) => <EmailNotify[]>res.data)
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
