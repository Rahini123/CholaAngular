import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrequestergroup',
  templateUrl: './newrequestergroup.component.html',
  styleUrls: ['./newrequestergroup.component.scss'],
})
export class NewrequestergroupComponent implements OnInit {
  memberdiv: boolean = true;
  memberEntrydiv: boolean = false;
  memberNewEntrydiv: boolean = false;
  noMemberDiv: boolean = false;
  conditiondropdown: any;
  members: any;
  member: any;
  filteredMember: any;
  constructor() {}

  ngOnInit(): void {
    this.member = [
      { name: 'ABAP Support (abapsupport@focusrtech.com)', code: 'M' },
      { name: 'ATA Support(atasupport@focusrtech.com)', code: 'M' },
      { name: 'MM Support(mmsupport@focusrtech.com)', code: 'M' },
      { name: 'PP Support(ppsupport@focusrtech.com)', code: 'M' },
    ];

    this.conditiondropdown = [{ name: 'All' }, { name: 'Any' }];
  }
  hideDiv() {
    this.memberdiv = false;
    this.memberEntrydiv = true;
    this.memberNewEntrydiv = false;
    this.noMemberDiv = true;
  }
  addMultipleMembers() {
    if (this.members) {
      this.members.push(this.members);
    } else {
      this.members = [{}];
    }
  }

  deleteMember() {
    this.members.pop();
  }
  hideNewDiv() {
    this.memberdiv = false;
    this.memberEntrydiv = false;
    this.memberNewEntrydiv = true;
    this.noMemberDiv = true;
  }

  searchMember(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.member.length; i++) {
      let member = this.member[i];
      if (member.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(member);
      }
    }

    this.filteredMember = filtered;
  }
}
