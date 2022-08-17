import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      // {
      //   icon: 'pi pi-fw pi-bell',
      //   badge: '8',
      //   badgeStyleClass: 'p-mr-2',
      // },
      {
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Profile Settings',
            routerLink: ['/dashboard/edit-profile'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            separator: true,
          },
          {
            label: 'Sign Out',
            routerLink: ['/login'],
            icon: 'pi pi-fw pi-sign-out',
          },
        ],
      },
      // {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
      // {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      // {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
  }
}
