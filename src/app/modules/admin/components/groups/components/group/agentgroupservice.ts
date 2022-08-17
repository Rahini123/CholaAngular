import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgentGroup } from './modal/agentgroup';

@Injectable()
export class AgentgroupService {
  constructor(private http: HttpClient) {}

  getAgentgroups() {
    return this.http
      .get<any>('assets/agents.json')
      .toPromise()
      .then((res) => <AgentGroup[]>res.data)
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
