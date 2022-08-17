import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { UploadService } from '../upload.service';
import { UploadList } from '../uploadlist';

@Component({
  selector: 'app-demo-file-system',
  templateUrl: './demo-file-system.component.html',
  styleUrls: ['./demo-file-system.component.scss']
})
export class DemoFileSystemComponent implements OnInit 
{

  cities!: UploadList[];
  selectedFiles?: FileList;
  selectedCity1 : UploadList[] = [];
  currentFile?: File;
  citynames : boolean = true;
  fileDetails!: FormGroup;
  message = '';
  methodMess : string = '';

  public isLoading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private formBuild : FormBuilder,
    private uploadService : UploadService,
    private messageService : MessageService) 
  { 
    
  }

  uploadListNames = [
    {
      dept_id : 1,
      dept_name : 'Band1Salary',
      dept_code : 'BS1'
    },
    {
      dept_id : 2,
      dept_name : 'Target Branches',
      dept_code : 'TB'
    },
    {
      dept_id : 3,
      dept_name : 'Method Matrix',
      dept_code : 'MM'
    },
    
  ]

  ngOnInit(): void 
  {
    this.fileDetails = this.formBuild.group({
      id : ['',Validators.required]
    });
  }

  get id()
  {
    return this.fileDetails.get('id')?.value;
  }

  onChange(event : any)
  {
      
    this.methodMess = event.value.uploadListNames.dept_code;
    console.log(this.methodMess);

      if(this.methodMess === 'BS1')
    {
      this.citynames = false;
    } else if(this.methodMess === 'TB') {
      this.citynames = false;
    } else if(this.methodMess === 'MM') {
      this.citynames = false;
    } else
    {
      this.citynames = true;
    }
  }
  uploadFile()
  {
    if (this.id === 1)
    {
      this.uploadBandSalary(event);
    } else if(this.id === 2) {
      this.uploadTargetBranch();
    } else if(this.id === 3) {
      this.uploadMatrix();
    }
  }

  selectFile(event : any) : void
  {
    this.selectedFiles = event.target.files;
  }

  uploadTargetBranch() : void
  {
    // this.progress = 0;
    // console.log('Dcode'+event.value.dcode);
    if(this.selectedFiles)
    {
      const file : File | null = this.selectedFiles.item(0);
      if (file)
      {
        this.currentFile = file;
        this.uploadService.targetBranches(this.currentFile).subscribe(
          { next :  
          (event : any) => {
            if(event.type === HttpEventType.UploadProgress)
            {
              this.isLoading.next(true);
              // this.progress = Math.round((100 / event.loaded || 0) * event.total);
              
            }

            else if(event instanceof HttpResponse)
            {
              this.isLoading.next(false);
              this.message = event.body.message;
              this.messageService.add({severity:'success', summary: 'Successfully', detail: 'uploaded the report`'});
              console.log(this.message);
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error :
          (err : any) => {
            console.log(err);
            this.isLoading.next(false);
            // this.progress = 0;
            this.messageService.add({severity:'error', summary:'Failure', detail:'Upload Failed'});
            if (err.error && err.error.message) {
              this.message = err.error.message;
              console.log(this.message);
            } else 
            {
              this.message = "Could not upload the file!";
            }
            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;

    }
  }

  uploadBandSalary(event : any)
  {
    console.log(this.methodMess);
    if(this.selectedFiles)
    {
      const file : File | null = this.selectedFiles.item(0);
      if (file)
      {
        this.currentFile = file;
        this.uploadService.uploadBandSalary(this.currentFile).subscribe(
          { next :  
          (event : any) => {
            if(event.type === HttpEventType.UploadProgress)
            {
              this.isLoading.next(true);
              // this.progress = Math.round((100 / event.loaded || 0) * event.total);
              
            }

            else if(event instanceof HttpResponse)
            {
              this.isLoading.next(false);
              this.message = event.body.message;
              this.messageService.add({severity:'success', summary: 'Successfully', detail: 'uploaded the report`'});
              console.log(this.message);
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error :
          (err : any) => {
            console.log(err);
            this.isLoading.next(false);
            // this.progress = 0;
            this.messageService.add({severity:'error', summary:'Failure', detail:'Upload Failed'});
            if (err.error && err.error.message) {
              this.message = err.error.message;
              console.log(this.message);
            } else 
            {
              this.message = "Could not upload the file!";
            }
            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;

    }
  }

  uploadMatrix()
  {
    console.log(this.methodMess);
    if(this.selectedFiles)
    {
      const file : File | null = this.selectedFiles.item(0);
      if (file)
      {
        this.currentFile = file;
        this.uploadService.methodMatrix(this.currentFile).subscribe(
          { next :  
          (event : any) => {
            if(event.type === HttpEventType.UploadProgress)
            {
              this.isLoading.next(true);
              // this.progress = Math.round((100 / event.loaded || 0) * event.total);
              
            }

            else if(event instanceof HttpResponse)
            {
              this.isLoading.next(false);
              this.message = event.body.message;
              this.messageService.add({severity:'success', summary: 'Successfully', detail: 'uploaded the report`'});
              console.log(this.message);
              // this.fileInfos = this.uploadService.getFiles();
            }
          },
          error :
          (err : any) => {
            console.log(err);
            this.isLoading.next(false);
            // this.progress = 0;
            this.messageService.add({severity:'error', summary:'Failure', detail:'Upload Failed'});
            if (err.error && err.error.message) {
              this.message = err.error.message;
              console.log(this.message);
            } else 
            {
              this.message = "Could not upload the file!";
            }
            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }

}
