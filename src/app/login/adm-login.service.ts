import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin } from './adminLogin';


@Injectable({
  providedIn: 'root'
})
export class AdmLoginService 
{
  url = 'http://localhost:8587/adminlogin'
  constructor(private http: HttpClient) { }

  login(admin: AdminLogin)
    {
        return this.http.post<any>(this.url,admin);
    }
}
