import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BidHistoryService 
{
  constructor(private _http:HttpClient) { }
  
  public getdata(bEmail:string):Observable<any>{
    return this._http.get<any>('http://localhost:8587/GetBidderHistory/'+bEmail)
}
}
