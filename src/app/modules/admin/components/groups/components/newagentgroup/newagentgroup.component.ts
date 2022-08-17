import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newagentgroup',
  templateUrl: './newagentgroup.component.html',
  styleUrls: ['./newagentgroup.component.scss'],
})
export class NewagentgroupComponent implements OnInit {
  businessFunction: any;
  filteredAgent: any;
  agent: any;
  agents: any;
  durationdropdown: any;
  agentdropdown: any;
  constructor() {}

  ngOnInit(): void {
    this.businessFunction = [
      {
        function: 'finance',
        code: 'EN',
      },
      { function: 'marketing', code: 'EN' },
      { function: 'legal', code: 'EN' },
    ];
    this.agent = [
      { name: 'ABAP Support (abapsupport@focusrtech.com)', code: 'M' },
      { name: 'ATA Support(atasupport@focusrtech.com)', code: 'M' },
      { name: 'MM Support(mmsupport@focusrtech.com)', code: 'M' },
      { name: 'PP Support(ppsupport@focusrtech.com)', code: 'M' },
    ];
    this.agentdropdown = [
      { name: 'ABAP Support ', code: 'M' },
      { name: 'ATA Support', code: 'M' },
      { name: 'MM Support', code: 'M' },
      { name: 'PP Support', code: 'M' },
    ];

    this.durationdropdown = [
      { duration: '15 minutes' },
      { duration: '1 hour' },
      { duration: '30 minutes' },
      { duration: '4 hour' },
    ];
  }
  searchAgent(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.agent.length; i++) {
      let agent = this.agent[i];
      if (agent.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(agent);
      }
    }

    this.filteredAgent = filtered;
  }
  addMultipleAgents() {
    if (this.agents) {
      this.agents.push(this.agents);
    } else {
      this.agents = [{}];
    }
  }

  deleteAgent() {
    this.agents.pop();
  }
}
