import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/layouts/auth/services/auth.service';
import {
  AuthState,
  selectUsername,
} from 'src/app/layouts/auth/state/auth.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  opened = false;
  togglePanel: boolean = true;
  display = true;
  items: MenuItem[] = [];
  iconItems: MenuItem[] = [];
  currentUser: Observable<object | null> | undefined;

  activeItem: MenuItem | undefined;
  style: string | undefined;
  username: any;
  currole: string;

  constructor(private router: Router, private store: Store<AuthState>, private authservice:AuthService) {}

  ngOnInit() {
    this.currole=this.authservice.getRole();
    this.currentUser = this.store.select(selectUsername);
    this.currentUser.subscribe((res: any) => {
      this.username = res ? res.username : null;
    });
    if (this.currole === 'ROLE_TEAM_MEMBER') {
      this.iconItems = [
        {
          icon: 'pi pi-fw pi-users',
          routerLink: ['/usermanagement/user'],
          routerLinkActiveOptions: { exact: true },
          tooltipOptions: { tooltipLabel: 'usermanagement' },
        },
        {
          icon: 'pi pi-fw pi-user',
          routerLink: ['/usermanagement/edit-profile'],
          routerLinkActiveOptions: { exact: true },

          tooltipOptions: { tooltipLabel: 'profile' },
        },
      ];
      this.activeItem = this.iconItems[0];
      this.items = [
        {
          icon: 'pi pi-fw pi-users',
          id: '1',
          label: 'user',
          routerLink: ['/usermanagement/user'],
          routerLinkActiveOptions: { exact: true },
          tooltip: 'usermanagement',
        },
        {
          icon: 'pi pi-fw pi-user',
          id: '2',
          label: 'Profile',
          routerLink: ['/usermanagement/edit-profile'],
          routerLinkActiveOptions: { exact: true },
        },
      ];
    } else {
      this.iconItems = [
        {
          icon:'pi pi-fw pi-file-o',
          routerLink: ['/dashboard/files'],
          routerLinkActiveOptions: {exact: true},
          tooltipOptions: { tooltipLabel : 'File Upload'},
        },
        {
          icon: 'pi pi-fw pi-ticket',
          routerLink: ['/dashboard/records'],
          routerLinkActiveOptions: { exact: true },
          tooltipOptions: { tooltipLabel: 'band1sourcedata' },
        },
        {
          icon: 'pi pi-fw pi-compass',
          routerLink: ['/dashboard/dashboard'],
          routerLinkActiveOptions: { exact: true },
          tooltipOptions: { tooltipLabel: 'Reports' },
        },
        {
          icon: 'pi pi-fw pi-user',
          routerLink: ['/dashboard/edit-profile'],
          routerLinkActiveOptions: { exact: true },

          tooltipOptions: { tooltipLabel: 'Profile' },
        },
        {
          icon: 'pi pi-fw pi-cog',
          routerLink: ['../dashboard/dropdown'],
          routerLinkActiveOptions: { exact: true },

          tooltipOptions: { tooltipLabel: 'dropdown' },
        },
        
        // {
        //   icon: 'pi pi-fw pi-cog',
        //   routerLink: ['/dashboard/admin'],
        //   routerLinkActiveOptions: { exact: true },
        //   tooltipOptions: { tooltipLabel: 'Admin' },
        // },
        
        // {
        //   icon: 'pi pi-fw pi-file-excel',
        //   routerLink: ['/dashboard/reports'],
        //   routerLinkActiveOptions: { exact: true },
        //   tooltipOptions: { tooltipLabel: 'Reports' },
        // },
      ];

      this.activeItem = this.iconItems[0];

      this.items = [
        {
          icon: 'pi pi-fw pi-file-o',
          label: 'File Upload',
          id: '1',
          routerLink: ['/dashboard/files'],
          routerLinkActiveOptions: { exact: true },
        },
        {
          icon: 'pi pi-fw pi-ticket',
          id: '2',
          label: 'Band1 Source-Data',
          routerLink: ['/dashboard/records'],
          routerLinkActiveOptions: { exact: true },
          tooltip: 'band1 source-data',
        },
        {
          icon: 'pi pi-fw pi-compass',
          id: '3',
          label: 'Reports',
          routerLink: ['/dashboard/dashboard'],
          routerLinkActiveOptions: { exact: true },
          tooltip: 'Reports',
        },
        {
          icon: 'pi pi-fw pi-user',
          id: '4',
          label: 'Profile',
          routerLink: ['/dashboard/edit-profile'],
          routerLinkActiveOptions: { exact: true },
        },
        {
          icon: 'pi pi-fw pi-clog',
          id: '5',
          label: 'Profile',
          routerLink: ['/dashboard/dropdown'],
          routerLinkActiveOptions: { exact: true },
        },
        
        
        // {
        //   icon: 'pi pi-fw pi-file-excel',
        //   label: 'Reports',
        //   id: '5',
        //   routerLink: ['/dashboard/reports'],
        //   routerLinkActiveOptions: { exact: true },
        // },
      ];
    }
  }

  openTab() {
    this.opened = true;
  }

  panelClick() {
    this.opened = true;
    this.togglePanel = false;
  }

  menuPanelClose() {
    this.opened = false;
    this.togglePanel = true;
  }

  // checkActiveState(givenLink: string) {
  //   if (this.router.url.indexOf(givenLink) === -1) {
  //     return 'P-menu';
  //   } else {
  //     alert('same');
  //     return 'p-menuitem-link-active';
  //   }
  // }
}
