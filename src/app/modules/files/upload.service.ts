import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgressBar } from 'primeng/progressbar';
import { catchError, map, Observable, scan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http : HttpClient) { }

  upload(file : File, method : any): Observable<HttpEvent<any>>
  {
    const formData : FormData = new FormData();
    formData.append('file', file);
    formData.append('method',method);

    const req = new HttpRequest('POST', `http://secure.focusrtech.com:5050/LoanProfitPortal/api/Profit/Service/uploadDriverData`, formData, {
      reportProgress: true,
      responseType : 'blob',
    });
    return this.http.request(req);
  }

  uploadBandSalary(file : File)
  {
    const formData : FormData = new FormData();
    formData.append('file',file);

    const req = new HttpRequest('POST',`http://secure.focusrtech.com:5050/LoanProfitPortal/api/Profit/Service/uploadBand1SourdeData`, formData, {
      reportProgress : true,
      responseType : 'blob',
    });
    return this.http.request(req);
  }

  targetBranches(file : File)
  {
    const formData : FormData = new FormData();
    formData.append('file',file);

    const req = new HttpRequest('POST',`http://secure.focusrtech.com:5050/LoanProfitPortal/api/Profit/Service/uploadTargetBranchData`, formData, {
      reportProgress : true,
      responseType : 'blob',
    });
    return this.http.request(req);
  }

  methodMatrix(file : File)
  {
    const formData : FormData = new FormData();
    formData.append('file',file);

    const req = new HttpRequest('POST',`http://secure.focusrtech.com:5050/LoanProfitPortal/api/Profit/Service/uploadMethodSourceData`, formData, {
      reportProgress : true,
      responseType : 'blob',
    });
    return this.http.request(req);
  }

  // getFiles(): Observable<any>
  // {
  //   //return this.http.get(`/LoanProfitPortal/api/Profit/Service/uploadDriverData`);
  // }

}
