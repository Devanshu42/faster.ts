import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  iwillhide=false;
  title = 'SchemeForFarmers';
  loginout:string;
  ngOnInit(): void {
    
    // this.farmerName=sessionStorage.getItem('FarmerName');
    if(sessionStorage.length===0)
    {
      this.loginout = "Login";
    }
    else{
      this.loginout = "Logout";
    }
  }

}
