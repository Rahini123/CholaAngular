import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-groupdashboard',
  templateUrl: './groupdashboard.component.html',
  styleUrls: ['./groupdashboard.component.scss'],
})
export class GroupdashboardComponent implements OnInit {
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
          label: 'Groups',
          url: '',
        },
        {
          label: 'Agent Group',
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
          label: 'Groups',
          url: '',
        },
        {
          label: 'Requester Group',
          url: '',
        },
      ];
    } else if (e.index == 2) {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'Groups',
          url: '',
        },
        {
          label: 'New Agent Group',
          url: '',
        },
      ];
    } else if (e.index == 3) {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'Groups',
          url: '',
        },
        {
          label: 'New Requester Group',
          url: '',
        },
      ];
    }
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
}
