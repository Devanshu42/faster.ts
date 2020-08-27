import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bid } from './Bid';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BidService {

  url = 'http://localhost:8587/placebid'
  constructor(private http: HttpClient) { }

  sendbid(bidobj: Bid)
    {
        return this.http.post<any>(this.url,bidobj);
    }

  public getitems():Observable<any>
  {
    return this.http.get<any>('http://localhost:8587/WelcomeBidder');
  }
}
