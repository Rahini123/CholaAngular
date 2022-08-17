import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from './modal/agent';

@Injectable()
export class AgentService {
  constructor(private http: HttpClient) {}

  getAgents() {
    return this.http
      .get<any>('assets/agents.json')
      .toPromise()
      .then((res) => <Agent[]>res.data)
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
