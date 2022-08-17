import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  roles: any;

  constructor() {}

  ngOnInit(): void {
    this.roles = [
      { name: 'User', code: 'NY' },
      { name: 'Admin', code: 'RM' },
      { name: 'Requester', code: 'LDN' },
    ];
  }
}
