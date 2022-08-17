import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
import { MenuItem, MessageService } from 'primeng/api';
import { ProgressBar } from 'primeng/progressbar';
import { BehaviorSubject, Observable } from 'rxjs';
import { UploadService } from '../upload.service';
import { UploadList } from '../uploadlist';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})


export class UploadComponent implements OnInit 
{

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  methodMess : any = '';
  progressbar ?: ProgressBar
  breadcrumb : any;
  items : MenuItem[] = [];
  activeItem!: MenuItem;
  display : boolean = false;

  uploadedFiles : any[] = [];

  cities: UploadList[];

  selectedCity1: UploadList[] = [];

  selectedCityCode!: string;

  citynames : boolean = true;

  fileDetails!: FormGroup;
  methodValuemessage : any = '';

  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private uploadService : UploadService,
    private ngDynamicbreadcrumb : NgDynamicBreadcrumbService,
    private messageService : MessageService,
    private formBuild : FormBuilder) 
    { 
      this.cities = [
        { dname: 'Average Assets', dcode: 'AA' , dvalue : '1.0'},
        { dname: 'Disbursement Amount', dcode: 'DA', dvalue : '2.0' },
        { dname: 'Disbursement File', dcode: 'DF' , dvalue : '5.0' },
        { dname: 'Total File', dcode: 'TF' ,dvalue : '6.0'},
        { dname: 'OD File', dcode: 'OD',dvalue : '7.0' }
      ];
    }

  ngOnInit(): void 
  {
    // this.fileInfos = this.uploadService.getFiles();
    this.items = [
      { label : 'Driver File', icon : 'pi pi-fw pi-upload'},
      {
        label : 'Source File',
        icon : 'pi pi-fw pi-upload',
        visible : false,
        routerLinkActiveOptions: {exact : true},
      }
    ];
    this.activeItem = this.items[0];

    this.fileDetails = this.formBuild.group({
      id : ['',Validators.required]
    });
  }

  showDialog()
  {
    this.display = true;
  }

  closeItem(e : any, a : any){}

  selectFile(event : any): void
  {
    this.selectedFiles = event.target.files;
  }

  handleChange(e : any)
  {
    if(e.index == 0)
    {
      this.breadcrumb = [
        {
          label : 'File Upload / Driver File',
          url : '',
        },
      ];
    } else if(e.index == 1)
    {
      this.breadcrumb = [
        {
          label : 'File Upload / Source File',
          url : '',
        },
      ];
    }
    this.ngDynamicbreadcrumb.updateBreadcrumb(this.breadcrumb);
  }

  upload(event : any) : void
  {
    this.progress = 0;
    // console.log('Dcode'+event.value.dcode);
    if(this.selectedFiles)
    {
      const file : File | null = this.selectedFiles.item(0);
      if (file)
      {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile,this.methodValuemessage).subscribe(
          { next :  
          (event : any) => {
            if(event.type === HttpEventType.UploadProgress)
            {
              this.isLoading.next(true);
              this.progress = Math.round((100 / event.loaded || 0) * event.total);
              
            }

            else if(event instanceof HttpResponse)
            {
              this.isLoading.next(false);
              this.message = 'File Uploaded Successfully';
              this.messageService.add({severity:'success', summary: 'Successfully', detail: 'uploaded the report`'});
              console.log(this.message);
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error :
          (err : any) => {
            console.log(err);
            this.isLoading.next(false);
            this.progress = 0;
            this.messageService.add({severity:'error', summary:'Failure', detail:'Upload Failed'});
            if (err.error && err.error.message) {
              this.message = err.error.message;
              console.log(this.message);
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;

    }
  } 

  onChange(event : any)
  {
      
    this.methodMess = event.value.dcode;
    console.log(this.methodMess);

    this.methodValuemessage = event.value.dvalue;
    console.log(this.methodValuemessage);

      if(this.methodValuemessage === '1.0' )
    {
      this.citynames = false;
    } else if(this.methodValuemessage === '2.0') {
      this.citynames = false;
    } else if(this.methodValuemessage === '5.0') {
      this.citynames = false;
    } else if(this.methodValuemessage === '6.0')
    {
      this.citynames = false;
    } else if(this.methodValuemessage === '7.0')
    {
      this.citynames = false;
    } else {
      this.citynames = true;
    }
  
  
  }

  onUpload(event : any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }


}
