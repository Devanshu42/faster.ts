import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService 
{
  constructor(private http: HttpClient) { }

  sendapproval(sellid: string): Observable<any> 
    {
        return this.http.get<any>('http://localhost:8587/declinesellrequest/'+ sellid);
    }
  sendrejection(sellid: string):Observable<any> 
  {
    return this.http.get<any>('http://localhost:8587/approvesellrequest/'+ sellid)
  }
  getallrequests(): Observable<any>  
  {
    return this.http.get<any>('http://localhost:8587/returnSellRequests');
  }
}
