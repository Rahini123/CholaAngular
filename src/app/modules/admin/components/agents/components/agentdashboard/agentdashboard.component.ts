import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.scss'],
})
export class AgentdashboardComponent implements OnInit {
  breadcrumb: any;
  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) {}

  ngOnInit(): void {}

  handleChange(e: any) {
    if (e.index == 0) {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'Agents',
          url: '',
        },
        {
          label: 'General',
          url: '',
        },
      ];
    } else if (e.index == 1) {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'Agents',
          url: '',
        },
        {
          label: 'New Agent',
          url: '',
        },
      ];
    } else {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'Agents',
          url: '',
        },
        {
          label: 'Import',
          url: '',
        },
      ];
    }
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
}
