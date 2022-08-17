import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) {}
  breadcrumb: any;
  ngOnInit(): void {}
  handleChange(e: any) {
    if (e.index == 0) {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'SLA Policies',
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
          label: 'General',
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
          label: 'Requesters',
          url: '',
        },
        {
          label: 'General',
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
          label: 'Roles',
          url: '',
        },
        {
          label: 'General',
          url: '',
        },
      ];
    } else if (e.index == 4) {
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
          label: 'General',
          url: '',
        },
      ];
    } else if (e.index == 5) {
      this.breadcrumb = [
        {
          label: 'Admin',
          url: '',
        },
        {
          label: 'Support Channels',
          url: '',
        },
        {
          label: 'Email Settings',
          url: '',
        },
      ];
    }
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
}
