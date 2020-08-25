import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FarmerInfo } from './farmerInfo';
@Injectable({
  providedIn: 'root'
})
export class FarmerService 
{
  url = 'http://localhost:8587/register'
  constructor(private http: HttpClient) { }

  sendformdata(farmer: FarmerInfo):Observable<any>
  {
    return this.http.post(this.url, farmer);
  }
}
