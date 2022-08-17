import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from './modal/role';

@Injectable()
export class RoleService {
  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http
      .get<any>('assets/roles.json')
      .toPromise()
      .then((res) => <Role[]>res.data)
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
