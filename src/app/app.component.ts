import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  iwillhide=false;
  title = 'SchemeForFarmers';
  logoutbtn=true;
  loginbtn = false;

  ngOnInit(): void {
    
    // this.farmerName=sessionStorage.getItem('FarmerName');
    if(sessionStorage.length===0)
    {
      this.logoutbtn = false;
      this.loginbtn = true;
    }
    else{
      this.loginbtn = false;
      this.logoutbtn = true;

    }
  }
  constructor(private router: Router){}
  
  logout()
  {
    sessionStorage.clear()
    this.router.navigate(['/']);
  }

}
