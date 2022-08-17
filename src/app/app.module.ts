import { NgModule } from '@angular/core';
import { MainInterceptor } from './interceptor/main.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { LandingPageComponent } from './layouts/auth/components/landing-page/landing-page.component';
import { RippleModule } from 'primeng/ripple';
import { LoginComponent } from './layouts/auth/components/login/login.component';
import { CheckboxModule } from 'primeng/checkbox';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthModule } from './layouts/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { EditProfileComponent } from './modules/profile/components/edit-profile/edit-profile.component';
import { DialogModule } from 'primeng/dialog';
// profile
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { SlaPolicyComponent } from './modules/admin/components/sla-policy/sla-policy.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { ChangePasswordComponent } from './modules/profile/components/change-password/change-password.component';

// admin
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoCompleteModule } from 'primeng/autocomplete';
//import { CheckboxModule } from 'primeng/checkbox';
import { CascadeSelectModule } from 'primeng/cascadeselect';
//import { Quill } from 'quill';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
// DOWNLOAD FILE 

import { MultiSelectModule } from 'primeng/multiselect';

import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ImageModule } from 'primeng/image';
import { EditorModule } from 'primeng/editor';
import { AgentdashboardComponent } from './modules/admin/components/agents/components/agentdashboard/agentdashboard.component';
import { NewagentComponent } from './modules/admin/components/agents/components/newagent/newagent.component';
import { GeneralComponent } from './modules/admin/components/agents/components/general/general.component';
import { ImportComponent } from './modules/admin/components/agents/components/import/import.component';
import { NewrequesterComponent } from './modules/admin/components/requesters/components/newrequesters/newrequester.component';
import { RequesterdashboardComponent } from './modules/admin/components/requesters/components/requestersdashboard/requesterdashboard.component';
import { RequestergeneralComponent } from './modules/admin/components/requesters/components/general/requestergeneral.component';
import { RolesComponent } from './modules/admin/components/roles/components/roles/roles.component';
import { RolesdashboardComponent } from './modules/admin/components/roles/components/rolesdashboard/rolesdashboard.component';
import { NewroleComponent } from './modules/admin/components/roles/components/newrole/newrole.component';
import { GroupComponent } from './modules/admin/components/groups/components/group/group.component';
import { GroupdashboardComponent } from './modules/admin/components/groups/components/groupdashboard/groupdashboard.component';
import { NewagentgroupComponent } from './modules/admin/components/groups/components/newagentgroup/newagentgroup.component';
import { NewrequestergroupComponent } from './modules/admin/components/groups/components/newrequestergroup/newrequestergroup.component';
import { EmailComponent } from './modules/admin/components/support_channels/components/email/email.component';
import { ChatComponent } from './modules/admin/components/support_channels/components/chat/chat.component';
import { NewEmailSettingsComponent } from './modules/admin/components/support_channels/components/new-email-settings/new-email-settings.component';
import { EmailNotificationComponent } from './modules/admin/components/support_channels/components/email-notification/email-notification.component';
import { TicketComponent } from './modules/tickets/components/ticket/ticket.component';
import { MenuModule } from 'primeng/menu';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ListboxModule } from 'primeng/listbox';
import { ChartModule } from 'primeng/chart';
import { TicketDetailComponent } from './modules/tickets/components/ticket-detail/ticket-detail.component';
import { RequesterdetailComponent } from './modules/admin/components/requesters/components/requesterdetail/requesterdetail.component';
import { UserComponent } from './modules/usermanagement/components/user/user.component';
import { AddUserComponent } from './modules/usermanagement/components/add-user/add-user.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BadgeModule } from 'primeng/badge';
import {MatIconModule} from '@angular/material/icon';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ProgressBarModule } from 'primeng/progressbar';

import { ChartdonutComponent } from './modules/dashboard/components/chartdonut/chartdonut.component';
import { UploadComponent } from './modules/files/upload/upload.component';
import { MessageService } from 'primeng/api';
import { DemoFileSystemComponent } from './modules/files/demo-file-system/demo-file-system.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { DownloadComponent } from './modules/dashboard/download/download.component';
import { DropdownComponent } from './modules/dashboard/dropdown/dropdown.component';

export function clearState(
  reducer: (arg0: any, arg1: { type: string }) => any
) {
  return function (state: any, action: { type: string }) {
    if (action.type === 'logout') {
      state = undefined;
    }

    return reducer(state, action);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    EditProfileComponent,
    SlaPolicyComponent,
    AdminComponent,
    ChangePasswordComponent,
    AgentdashboardComponent,
    NewagentComponent,
    GeneralComponent,
    ImportComponent,
    NewrequesterComponent,
    RequesterdashboardComponent,
    RequestergeneralComponent,
    RolesComponent,
    RolesdashboardComponent,
    NewroleComponent,
    GroupComponent,
    GroupdashboardComponent,
    NewagentgroupComponent,
    NewrequestergroupComponent,
    EmailComponent,
    ChatComponent,
    NewEmailSettingsComponent,
    EmailNotificationComponent,
    TicketComponent,
    TicketDetailComponent,
    RequesterdetailComponent,
    UserComponent,
    AddUserComponent,
    ChartdonutComponent,
    UploadComponent,
    DownloadComponent,
    DemoFileSystemComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    EditorModule,
    DropdownModule,
    RouterModule,
    NgApexchartsModule,
    ToolbarModule,
    ConfirmPopupModule,
    AppRoutingModule,
    FileUploadModule,
    InputTextModule,
    NgDynamicBreadcrumbModule,
    SidebarModule,
    AutoCompleteModule,
    CascadeSelectModule,
    ImageModule,
ProgressSpinnerModule,
MatCardModule,
MatFormFieldModule,
MatSelectModule,
MatIconModule,
    ToggleButtonModule,
    InputSwitchModule,
    DividerModule,
    ButtonModule,
    ToastModule,
    RippleModule,
    BadgeModule,
    CheckboxModule,
    PanelMenuModule,
    TableModule,
    InputTextareaModule,
    PanelModule,
    PasswordModule,
    InputNumberModule,
    AccordionModule,
    TabViewModule,
    CardModule,
    MenubarModule,
    ConfirmDialogModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
    TabMenuModule,
    RadioButtonModule,
    MultiSelectModule,
    MenuModule,
    CalendarModule,
    OverlayPanelModule,
    TieredMenuModule,
    ListboxModule,
    ChartModule,
    ProgressBarModule,
    ScrollTopModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { metaReducers: [clearState] }),

    StoreDevtoolsModule.instrument({
      name: 'Ticket Management Application',
      maxAge: 25,
      logOnly: environment.production,
    }),
    AppRoutingModule,
    SharedModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    JwtHelperService,

    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true,
    },
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
