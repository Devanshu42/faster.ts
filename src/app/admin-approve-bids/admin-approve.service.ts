import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminApproveService 
{

  approvebid(bidid: string):Observable<any> 
  {
    return this.http.get<any>('http://localhost:8587/finaliseBid/'+ bidid)
  }
  getallbids(): Observable<any>  
  {
    return this.http.get<any>('http://localhost:8587/returnOngoingBids');
  }
  constructor(private http: HttpClient) { }
}
