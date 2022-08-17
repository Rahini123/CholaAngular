import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Insurance } from './modal/ticket';
import { TicketService } from './ticketservice';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  providers: [TicketService, MessageService, ConfirmationService],
})
export class TicketComponent implements OnInit, AfterViewInit {
  @ViewChild('opMenu') op: OverlayPanel | any;

  toggleOverlay = ({ originalEvent }: any) => this.op.toggle(originalEvent);

  tickets: any = [];
  selectedTickets: any;
  cols: any;
  _selectedColumns: any;
  items: any;
  editTicketScreen: boolean = false;
  header: any;
  replyitems: any;
  moreitems: any;
  menuitems: any;
  opPanel: any;
  menuItemDisplay: boolean = false;
  actualtarget: any;
  agentitems: any;
  ticket:Insurance[] = [];
  data: any = [];

  constructor(
    private router: Router,
    private ticketService: TicketService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.ticketService.getTickets().subscribe(data => {
      this.data = data
      console.log(data)
    })
  }

  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.ticketService.getRecords().then((data) => (this.ticket = data));
    this.agentitems = [
      { label: 'ATA Support(Me)' },
      { label: 'ATA SD' },
      { label: 'FICO Support' },
      { label: 'PP Support' },
      { label: 'ABAP Support' },
      { label: 'MM Support' },
    ];

    this.menuitems = [
      {
        label: 'ATA BASIS',
        value: 'de',
        items: [
          { label: 'ATA support', value: 'ata ss' },
          { label: 'ATA squard', value: 'ata sa' },
        ],
      },
      {
        label: 'ATA ABAP',
        value: 'us',
        items: [
          { label: 'ABAP support(me)', value: 'sup' },
          { label: 'ATA', value: 'ata' },
        ],
      },
      {
        label: 'ATA MM',
        value: 'jp',
        items: [
          { label: 'MM support', value: 'mm ss' },
          { label: 'MM', value: 'mm' },
        ],
      },
    ];

    // this.menuitems = [
    //   {
    //     label: 'ATA ABAP',
    //     command: this.toggleOverlay,
    //     // command: (event: any) => {
    //     //   this.menuClick(event);
    //     // },
    //   },
    //   {
    //     label: 'ATA BB',
    //     command: this.toggleOverlay,
    //   },
    // ];
    this.items = [
      {
        label: 'Delete',
        icon: 'pi pi-times',
      },
      {
        label: 'Pick Up',
      },
      {
        label: 'Assign to',
      },
      {
        label: 'Bulk update',
      },
      {
        label: 'Merge',
      },
      {
        label: 'Execute Scenario',
      },
      {
        label: 'Close',
      },
      {
        label: 'Mark as spam',
      },
    ];

    this.cols = [
      { field: 'band1_salary_id', header: 'band1_salary_id' },
      { field: 'account', header: 'account' },
      { field: 'cc', header: 'cc' },
      { field: 'chola_period', header: 'chola_period' },
      { field: 'createdAt', header: 'createdAt' },
      // { field: 'createdBy', header: 'createdBy' },
      { field: 'data', header: 'data' },
      { field: 'emp_id', header: 'emp_id' },
      { field: 'geography', header: 'geography' },
      { field: 'jobposition', header: 'jobposition' },
      { field: 'lob', header: 'lob' },
      // { field: 'modified_by', header: 'modified_by' },
      // { field: 'modified_date', header: 'modified_date' },
      { field: 'period', header: 'period' },
      { field: 'scale', header: 'scale' },
      { field: 'scenario', header: 'scenario' },
      { field: 'source', header: 'source' },
      { field: 'updatedAt', header: 'updatedAt' },
      { field: 'uploaded_by', header: 'uploaded_by' },
      { field: 'uploaded_date', header: 'uploaded_date' },
      { field: 'year', header: 'year'},
    ];
    this._selectedColumns = [
      { field: 'band1_salary_id', header: 'band1_salary_id' },
      { field: 'chola_period', header: 'chola_period' },
      { field: 'cc', header: 'cc' },
      { field: 'data', header:'data'}
    ];
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col: any) => val.includes(col));
  }
  editTicket(ticket: any) {
    // this.editTicketScreen = true;
    this.header = ticket.id;
    this.router.navigate(['/dashboard/records', ticket.id]);
  }
  menuClick(e: any) {
    console.log(e);
    // this.menuItemDisplay = true;
    this.op.show(e, this.actualtarget);
  }




}
