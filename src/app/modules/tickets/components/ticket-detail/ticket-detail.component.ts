import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from 'primeng/calendar';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
  providers: [MessageService],
})
export class TicketDetailComponent implements OnInit {
  @ViewChild('calendar', { static: false })
  replyitems: any;
  moreitems: any;
  display: any;
  dueDates: any;
  priority: any;
  requester: any;
  bccdiv: boolean = false;
  ccdiv: boolean = false;
  replydiv: boolean = false;
  pseudoReplyDiv: boolean = true;
  editTicketSidebar: boolean = false;
  calendardiv: boolean = false;
  calendarDropdowndiv: boolean = true;
  private calendar: Calendar | any;
  departments: any;
  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit(): void {
    this.dueDates = [
      { name: 'Today', code: 'NY' },
      { name: 'Tomorrow', code: 'RM' },
      { name: 'This Week', code: 'LDN' },
      { name: 'Next week', code: 'IST' },
    ];
    this.priority = [
      { name: 'Low', code: 'NY' },
      { name: 'High', code: 'RM' },
      { name: 'Medium', code: 'LDN' },
      { name: 'Urgent', code: 'IST' },
    ];

    this.departments = [
      { name: 'Development', code: 'NY' },
      { name: 'Finance', code: 'RM' },
      { name: 'HR', code: 'LDN' },
      { name: 'IT', code: 'IST' },
      { name: 'Marketing', code: 'PRS' },
    ];
    this.replyitems = [
      {
        label: 'Reply',
        icon: 'pi pi-reply',
      },
      {
        label: 'Forward',
        icon: 'pi pi-forward',
      },
      {
        label: 'Add Note',
      },
    ];
    this.moreitems = [
      {
        label: 'Delete',
      },
      {
        label: ' Execute Scenario',
      },
      {
        label: 'Merge',
      },
      {
        label: 'Print',
      },

      {
        label: 'Mark as spam',
      },
    ];
  }
  changeDueDate() {
    this.display = true;
  }
  openCalendar(event: any) {
    this.calendardiv = true;
    this.calendarDropdowndiv = false;
  }
  cancelClick() {
    this.display = false;
    this.calendardiv = false;
    this.calendarDropdowndiv = true;
  }
  editRequesterDetail(requester: any) {
    // this.editTicketScreen = true;
    this.requester = 'freshservice:3223329'; //hardcode
    this.router.navigate(['/dashboard/admin/requesters', this.requester]);
  }
  ccClicked() {
    this.ccdiv = true;
  }

  bccClicked() {
    this.bccdiv = true;
  }
  bccClear() {
    this.bccdiv = false;
  }
  ccClear() {
    this.ccdiv = false;
  }
  onBasicUpload(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded ',
    });
  }
  replyClick() {
    this.replydiv = true;
    this.pseudoReplyDiv = false;
  }
  cancelReplyButton() {
    this.replydiv = false;
    this.pseudoReplyDiv = true;
  }
  editTicket() {
    this.editTicketSidebar = true;
  }
}
