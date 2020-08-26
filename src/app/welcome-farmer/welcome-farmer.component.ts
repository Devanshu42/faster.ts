import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-welcome-farmer',
  templateUrl: './welcome-farmer.component.html',
  styleUrls: ['./welcome-farmer.component.css']
})
export class WelcomeFarmerComponent implements OnInit {
farmerName:String;

  ngOnInit(): void {
    this.farmerName=sessionStorage.getItem('FarmerName');
    this.refresh.ngOnInit();
  }
  logout()
  {
    sessionStorage.clear()
    if(sessionStorage.getItem("farmerEmail")===null)
    {
        this.router.navigate(['/']);
    }
  }

  constructor(private router: Router, private refresh: AppComponent) {
    
   }

}
