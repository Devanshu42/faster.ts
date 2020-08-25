import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmerInfo } from './farmerInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerService 
{
  private url = 'http://localhost:8587/register'
  constructor(private http: HttpClient) { }

  sendformdata(farmer: FarmerInfo):Observable<any>
  {
    return this.http.post(this.url, farmer);
  }
}
