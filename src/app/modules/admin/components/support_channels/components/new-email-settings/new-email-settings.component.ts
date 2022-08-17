import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-email-settings',
  templateUrl: './new-email-settings.component.html',
  styleUrls: ['./new-email-settings.component.scss'],
})
export class NewEmailSettingsComponent implements OnInit {
  selectedMailServer: string = 'Default';
  selectedMailSystem: string = 'Incomingandoutgoing';
  agentdropdown: any;
  emailSystem: string | undefined;
  mailServer: string | undefined;

  defaultServerdiv: boolean = true;
  ownServerEntrydiv: boolean = false;
  savediv: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.agentdropdown = [
      { name: 'ABAP Support ', code: 'M' },
      { name: 'ATA Support', code: 'M' },
      { name: 'MM Support', code: 'M' },
      { name: 'PP Support', code: 'M' },
    ];
  }
  handleDefaultclick() {
    this.defaultServerdiv = true;
    this.ownServerEntrydiv = false;
    this.savediv = true;
  }
  handleOwnServerclick() {
    this.defaultServerdiv = false;
    this.ownServerEntrydiv = true;
    this.savediv = false;
  }
}
