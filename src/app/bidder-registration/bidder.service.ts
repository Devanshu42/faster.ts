import { Injectable } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BidderService 
{
  url = 'http://localhost:8587/bidderregister'
  constructor(private http: HttpClient) { }

  sendformdata(bidder: NgForm) : Observable<any>
  {
    return this.http.post(this.url, bidder);
  }
}
