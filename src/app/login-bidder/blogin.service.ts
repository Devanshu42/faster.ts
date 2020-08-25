import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BidderLogin } from './bidderLogin';


@Injectable({
  providedIn: 'root'
})
export class BloginService 
{
  url = 'http://localhost:8587/bidderlogin'
  constructor(private http: HttpClient) { }

  login(blogin: BidderLogin)
    {
        return this.http.post<any>(this.url,blogin);
    }
}
