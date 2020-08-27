import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService 
{
  url = 'http://localhost:8587/adminapprove'
  constructor(private http: HttpClient) { }

  sendapproval(sellid: string)
    {
        return this.http.post<any>(this.url,sellid);
    }
}
