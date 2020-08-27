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
    if (this.farmerName==null)
    {
      this.router.navigate(['login-farmer']);
    }
  }


  constructor(private router: Router, private refresh: AppComponent) {
    
   }

}
