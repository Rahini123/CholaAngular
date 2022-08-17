import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
  providers: [MessageService],
})
export class ImportComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onUpload(e: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }
}
