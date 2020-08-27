import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bid } from './Bid';
@Injectable({
  providedIn: 'root'
})
export class BidService {

  url = 'http://localhost:8587/adminapprove'
  constructor(private http: HttpClient) { }

  sendbid(bidobj: Bid)
    {
        return this.http.post<any>(this.url,bidobj);
    }

  getitems()
  {
    return this.http.get('http://localhost:8587/WelcomeBidder');
  }
}
