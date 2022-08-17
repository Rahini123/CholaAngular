import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './modal/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<any>('assets/users.json')
      .toPromise()
      .then((res) => <User[]>res.data)
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
