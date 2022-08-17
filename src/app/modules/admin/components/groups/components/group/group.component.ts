import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AgentgroupService } from './agentgroupservice';
import { AgentGroup } from './modal/agentgroup';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers: [ConfirmationService, MessageService, AgentgroupService],
})
export class GroupComponent implements OnInit {
  groups: any;

  group: any;

  groupDialog: boolean = false;

  selectedGroups: any;

  constructor(
    private AgentgroupService: AgentgroupService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.AgentgroupService.getAgentgroups().then(
      (data) => (this.groups = data)
    );
  }

  deleteSelectedGroups() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Group?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.groups = this.groups.filter(
          (val: any) => !this.selectedGroups.includes(val)
        );
        this.selectedGroups = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Groups Deleted',
          life: 3000,
        });
      },
    });
  }

  editAgentGroup(group: AgentGroup) {
    this.group = { ...group };
    this.groupDialog = true;
  }

  deleteAgentGroup(group: AgentGroup) {
    alert('here');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + group.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.groups = this.groups.filter(
          (val: { id: string | undefined }) => val.id !== group.id
        );
        this.group = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'group Deleted',
          life: 3000,
        });
      },
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.groups.length; i++) {
      if (this.groups[i].id === id) {
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
}
