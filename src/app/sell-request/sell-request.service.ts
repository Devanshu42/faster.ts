import { Injectable } from '@angular/core';
import { sellRequest } from './sellRequest';
import { HttpClient } from '@angular/common/http';


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
}
