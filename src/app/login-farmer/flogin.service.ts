import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { Farmerlogin } from './farmerlogin';


@Injectable({
  providedIn: 'root'
})
export class FloginService 
{
  url = 'http://localhost:8587/login'
  constructor(private http: HttpClient) { }

  login(flogin: Farmerlogin)
    {
        return this.http.post<any>(this.url,flogin);
    }
}
