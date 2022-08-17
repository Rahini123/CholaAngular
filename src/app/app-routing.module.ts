import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './layouts/auth/components/landing-page/landing-page.component';
import { LoginComponent } from './layouts/auth/components/login/login.component';
import { AuthGuard } from './layouts/auth/guards/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { RequesterdetailComponent } from './modules/admin/components/requesters/components/requesterdetail/requesterdetail.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UploadComponent } from './modules/files/upload/upload.component';
import { ChangePasswordComponent } from './modules/profile/components/change-password/change-password.component';
import { EditProfileComponent } from './modules/profile/components/edit-profile/edit-profile.component';
import { DownloadComponent } from './modules/dashboard/download/download.component';
import { TicketDetailComponent } from './modules/tickets/components/ticket-detail/ticket-detail.component';
import { TicketComponent } from './modules/tickets/components/ticket/ticket.component';
import { UserComponent } from './modules/usermanagement/components/user/user.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DropdownComponent } from './modules/dashboard/dropdown/dropdown.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'usermanagement',
    component: DefaultComponent,
    children: [
      {
        path: 'user',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: UserComponent,
      },
      {
        path: 'edit-profile',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: EditProfileComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: DashboardComponent,
        data: {
          breadcrumb : [
            {
              label: 'Profit Reports',
              url : '',
            }
          ]
        }
      },
      {
        path: 'edit-profile',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: EditProfileComponent,
        data: {
          breadcrumb: [
            {
              label: 'Profile',
              url: '',
            },
            {
              label: 'General',
              url: '',
            },
          ],
        },
      },
      {
        path: 'records',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: TicketComponent,
        data: {
          breadcrumb: [
            {
              label: 'Band1 Source-Data',
              url: '',
            },
          ],
        },
      },
      
      {
        path:'files',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component: UploadComponent,
        data: {
          breadcrumb : [
            {
              label: 'File Upload',
              url : '',
            },
            {
              label: 'Driver File',
              url : '',
            }
          ]
        }
      },
      {
        path:'dropdown',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        component:DropdownComponent,
        data: {
          breadcrumb : [
            {
              label: 'Dropdown',
              url : '',
            },
           
          ]
        }
      },
      {
        path : 'reports',
        pathMatch : 'full',
        canActivate : [AuthGuard],
        component : DownloadComponent,
        data : {
          breadcrumb : [
            {
              label :'Profit Reports',
              url : '',
            }
          ]
        }
      }

      // {
      //   path: 'admin',
      //   pathMatch: 'full',
      //   canActivate: [AuthGuard],
      //   component: AdminComponent,
      //   data: {
      //     breadcrumb: [
      //       {
      //         label: 'Admin',
      //         url: '',
      //       },
      //       {
      //         label: 'SLA Policies',
      //         url: '',
      //       },
      //     ],
      //   },
      // },
      // {
      //   path: 'admin/requesters/:id',
      //   pathMatch: 'full',
      //   canActivate: [AuthGuard],
      //   component: RequesterdetailComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
