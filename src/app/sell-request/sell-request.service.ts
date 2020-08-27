import { cropdetails } from './cropdetails';
import { Injectable } from '@angular/core';
import { sellRequest } from './sellRequest';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SellRequestService 
{
  url = 'http://localhost:8587/addSellRequest'
  constructor(private http: HttpClient) { }
  sendSellReq(sellReqObj: sellRequest)
    {
        return this.http.post<any>(this.url,sellReqObj);
    }

    public getcropnames(croptype:string):Observable<any>{
      return this.http.get<any>('http://localhost:8587/getCropNames/'+croptype)
}
}