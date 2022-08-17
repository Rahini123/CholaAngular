import { Component, OnInit, ViewChild } from '@angular/core';
import * as saveAs from 'file-saver';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { DownloadService } from '../files/download.service';
import { DownloadReport } from './downloadReport';


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  // items : DownloadReport[];
  items!: MenuItem[];

  reportStatus1 : boolean = false;

  reportStatus2 : boolean = false;

  reportStatus3 : boolean = false;

  constructor(
    private message : MessageService,
    private downloadService : DownloadService,) 
    {}

    // get value on key
    period : any = 'Apr';
  year : any = '2022.0';

    
    allReports = [
        {reportName : 'Band Salary', reportCode : 'BS'},
        {reportName : 'Target Branches', reportCode : 'TB'},
        {reportName : 'Method Matrix', reportCode : 'MM'}
      ];

      temp = this.allReports;

  ngOnInit(): void 
  {
    this.items = [
      {
        label: 'Navigate',
        items: [{
          label: 'Band 1 Salary',
          icon: 'pi pi-upload',
          routerLink: '/dashboard/reports'
      },
        {
            label: 'Target Branches',
            icon: 'pi pi-upload',
            routerLink: '/dashboard/reports'
        },
        {
          label: 'Method Matrix',
          icon: 'pi pi-upload',
          routerLink: '/dashboard/reports'
      }
    ]}
    ]
  }

  method1(allReports: any)
  {
    console.log(allReports);
    if(allReports === 'MM')
    {
      console.log('Method Matrix');
      this.reportStatus3 = false;
      this.reportStatus1 = true;
      this.reportStatus2 = true;
    } else if(allReports === 'BS')
    {
      console.log('Band Matrix')
      this.reportStatus1 = false;
      this.reportStatus2 = true;
      this.reportStatus3 = true;
    } 
    else if(allReports === 'TB')
    {
      console.log('Taregt Matrix')
      this.reportStatus2 = false;
      this.reportStatus3 = true;
      this.reportStatus1 = true;
    }
    else
    {
      console.log('SElect valid One')
    }
  }

  downloadFile()
  {
    let payload = {
      period : this.period,
      year : this.year
    }
    this.isLoading.next(true);
    this.downloadService.DownloadReports(payload)
        .subscribe({ next:
          (res : any) => this.handleLoading(res),
          error :
        (err) => this.handleError(err)
  });
  }

  getFileName(response: any) {
    let name: string;
    try {
      const contentDisposition: string = response.headers.get(
        'content-disposition'
      );
      const [, filename] = contentDisposition.split('filename=');
      name = filename;
    } catch (e) {
      name = 'File_Name_Not_Specified_' + new Date();
    }
    return name;
  }

  handleLoading(res: any)
  {
    try {
      const blob = new Blob([res.body], {
        type: res.headers.get('Content-Type'),
      });
      const file = new File([blob], this.getFileName(res), {
        type: res.headers.get('Content-Type'),
      });

      saveAs(file);
    } catch (err) {
      var textFileAsBlob = new Blob([res.body], {
        type: res.headers.get('Content-Type'),
      });
      const file = new File([textFileAsBlob], this.getFileName(res));

      saveAs(file);
    }
    this.isLoading.next(false);
    console.log('Successfully')
    this.message.add({severity:'success', summary: 'Successfully', detail: 'Downloaded the report`'})
  }

  handleError(err:any)
  {
    this.isLoading.next(false);
    this.message.add({severity:'error', summary: 'Failure', detail: 'Failed to Download`'})
    if(err.status.toString() === '400')
    {
      console.log('No data found')
    }
    else
    {
      console.log('Error Occured')
    }
  }
  
}
