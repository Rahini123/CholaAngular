import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http : HttpClient) { }

  DownloadReports(payload : any)
  {
    let options : any = {
      observe : 'response',
      responseType : 'blob',
    };
    return this.http.post<Blob>
        (`http://secure.focusrtech.com:5050/LoanProfitPortal/api/Profit/Service/calculateBand1`, payload,options)
        .pipe(map((response) => response));
  }

}
