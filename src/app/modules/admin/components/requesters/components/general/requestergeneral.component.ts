import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { RequesterService } from './requesterservice';
import { Requester } from './modal/requesters';
import * as FileSaver from 'file-saver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requestergeneral',
  templateUrl: './requestergeneral.component.html',
  styleUrls: ['./requestergeneral.component.scss'],
  providers: [MessageService, RequesterService, ConfirmationService],
})
export class RequestergeneralComponent implements OnInit {
  requesters: any;

  requester: any;

  requesterDialog: boolean = false;

  selectedRequesters: any;

  constructor(
    private router: Router,
    private requesterService: RequesterService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.requesterService
      .getRequesters()
      .then((data) => (this.requesters = data));
  }

  deleteSelectedRequesters() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Requester?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.requesters = this.requesters.filter(
          (val: any) => !this.selectedRequesters.includes(val)
        );
        this.selectedRequesters = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Requesters Deleted',
          life: 3000,
        });
      },
    });
  }

  editRequester(requester: Requester) {
    this.requester = { ...requester };
    this.requesterDialog = true;
  }

  deleteRequester(requester: Requester) {
    alert('here');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + requester.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.requesters = this.requesters.filter(
          (val: { id: string | undefined }) => val.id !== requester.id
        );
        this.requester = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'requester Deleted',
          life: 3000,
        });
      },
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.requesters.length; i++) {
      if (this.requesters[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.requesters);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'requesters');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  editRequesterDetail(requester: any) {
    // this.editTicketScreen = true;
    this.requester = requester.id;
    this.router.navigate(['/dashboard/admin/requesters', requester.id]);
  }
}
