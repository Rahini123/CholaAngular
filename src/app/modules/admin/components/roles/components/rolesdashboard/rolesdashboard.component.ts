import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-rolesdashboard',
  templateUrl: './rolesdashboard.component.html',
  styleUrls: ['./rolesdashboard.component.scss'],
})
export class RolesdashboardComponent implements OnInit {
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
          label: 'Roles',
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
          label: 'Roles',
          url: '',
        },
        {
          label: 'New Role',
          url: '',
        },
      ];
    }
    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
}
