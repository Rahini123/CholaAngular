import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EmailNotifyService } from './emailnotifyservice';
import { EmailNotify } from './modal/email-notify';

@Component({
  selector: 'app-email-notification',
  templateUrl: './email-notification.component.html',
  styleUrls: ['./email-notification.component.scss'],
  providers: [MessageService, EmailNotifyService, ConfirmationService],
})
export class EmailNotificationComponent implements OnInit {
  email_notifications: any;

  email_notify: any;
  emailnotifybar: boolean = false;
  header: any;

  constructor(
    private emailNotiftyService: EmailNotifyService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.emailNotiftyService.getEmailNotifys().then((data) => {
      console.log(data);
      this.email_notifications = data;
    });
  }

  editNotification(emailnotify: EmailNotify) {
    this.email_notify = { ...emailnotify };
    console.log(this.email_notify.name);
    this.header = this.email_notify.name;
    this.emailnotifybar = true;
  }
}
