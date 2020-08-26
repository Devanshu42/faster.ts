import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellReqhistoryService {
  constructor(private _http:HttpClient) { }
  
  public getdata(fEmail:string):Observable<any>{
    return this._http.get<any>('http://localhost:8587/SellReqHistory/'+fEmail)
}
}
