import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-requesterdashboard',
  templateUrl: './requesterdashboard.component.html',
  styleUrls: ['./requesterdashboard.component.scss'],
})
export class RequesterdashboardComponent implements OnInit {
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
          label: 'Requesters',
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
          label: 'Requesters',
          url: '',
        },
        {
          label: 'New Requester',
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
          label: 'Requesters',
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
