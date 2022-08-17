import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AgentService } from './agentservice';
import { Agent } from './modal/agent';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  providers: [MessageService, AgentService, ConfirmationService],
})
export class GeneralComponent implements OnInit {
  agents: any;

  agent: any;

  agentDialog: boolean = false;

  selectedAgents: any;

  constructor(
    private agentService: AgentService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.agentService.getAgents().then((data) => (this.agents = data));
  }

  deleteSelectedAgents() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected Agent?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.agents = this.agents.filter(
          (val: any) => !this.selectedAgents.includes(val)
        );
        this.selectedAgents = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Agents Deleted',
          life: 3000,
        });
      },
    });
  }

  editAgent(agent: Agent) {
    this.agent = { ...agent };
    this.agentDialog = true;
  }

  deleteAgent(agent: Agent) {
    alert('here');
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + agent.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.agents = this.agents.filter(
          (val: { id: string | undefined }) => val.id !== agent.id
        );
        this.agent = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'agent Deleted',
          life: 3000,
        });
      },
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.agents.length; i++) {
      if (this.agents[i].id === id) {
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
      const worksheet = xlsx.utils.json_to_sheet(this.agents);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'agents');
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
}
