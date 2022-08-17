import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmailService } from './emailservice';
import { Email } from './model/email';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [MessageService, EmailService, ConfirmationService],
})
export class EmailComponent implements OnInit {
  emails: any;

  email: any;

  emailDialog: boolean = false;
  breadcrumb: any;

  checked2: boolean = true;
  checked3: boolean = true;

  selectedEmails: any;
  bccDialog: boolean = false;
  constructor(
    private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,
    private emailService: EmailService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.emailService.getEmails().then((data) => (this.emails = data));
  }
  handleChange(e: any) {
    if (e.index == 0) {
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
    } else if (e.index == 1) {
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
          label: 'New Email Settings',
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
          label: 'Support Channels',
          url: '',
        },
        {
          label: 'Chat',
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
          label: 'Support Channels',
          url: '',
        },
        {
          label: 'Email Notifications',
          url: '',
        },
      ];
    }

    this.ngDynamicBreadcrumbService.updateBreadcrumb(this.breadcrumb);
  }
  deleteSelectedEmails() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Email?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.emails = this.emails.filter(
          (val: any) => !this.selectedEmails.includes(val)
        );
        this.selectedEmails = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Emails Deleted',
          life: 3000,
        });
      },
    });
  }

  editEmail(email: Email) {
    this.email = { ...email };
    this.emailDialog = true;
  }

  deleteEmail(email: Email) {
    alert('here');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + email.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.emails = this.emails.filter(
          (val: { id: string | undefined }) => val.id !== email.id
        );
        this.email = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'email Deleted',
          life: 3000,
        });
      },
    });
  }
  handleBccClick() {
    this.bccDialog = true;
  }
}
