import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DownloadService } from '../../files/download.service';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DashboardComponent } from '../dashboard.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit 
{
  methodCodeMessage : any = '';
  allReports : any;
  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  dashboardclone : any = '';

  selectedValue : any = '';
  period : any = 'Apr';
  year : any = '2022.0';

  searchDetails!: FormGroup;

  constructor(
    private downloadService : DownloadService,
    private primengConfig : PrimeNGConfig,
    private message : MessageService,
    private fb : FormBuilder) 
    { 
      this.allReports = [
        {reportName : 'Band Salary', reportCode : 'BS'},
        {reportName : 'Target Branches', reportCode : 'TB'},
        { reportName : 'Method Matrix', reportCode : 'MM'}
      ];
    }


  ngOnInit(): void
  {
    this.primengConfig.ripple = true;

    this.searchDetails = this.fb.group({
      payload_details : '',
    })

    //  this.dashboardclone = new DashboardComponent();
    //  console.log(this.dashboardclone.method1)
  }

  // get period() {
  //   this.period = 
  // }

  // get year() {
  //   return this.searchDetails.get('payload_details')?.value.year;
  // }

  downloadFile()
  {
    let payload = {}
    this.isLoading.next(true);
    this.downloadService.DownloadReports(payload)
        .subscribe({ next:
          (res : any) => this.handleLoading(res),
          error :
        (err) => this.handleError(err)
  });
  }

  handleLoading(res: any)
  {
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

  method1(allReports: any)
  {
    console.log(allReports);
    if(this.dashboardclone.reportCode === 'BS')
    {
      console.log('Call Band MATRIX')
      this.dashboardclone.reportStatus1 = true;
    }
    else if(this.dashboardclone.reportCode === 'TB')
    {
      console.log('Call Target MATRIX')
      this.dashboardclone.reportStatus2 = true;
    }
    else
    {
      console.log("Nothing")
    }
  }

  // validationmethod()
  // {
  //   if(this.dashboardclone.reportCode === 'BS')
  //   {
  //     this.reportstatus = true;
  //   }
  //   else if(this.dashboardclone.reportCode === 'TB')
  //   {
  //     this.reportstatus = true;
  //   }
  //   else if(this.dashboardclone.reportCode === 'MM')
  //   {
  //     this.reportstatus = true;
  //   }
  //   else
  //   {
  //     this.reportstatus = false;
  //   }
  // }

}
