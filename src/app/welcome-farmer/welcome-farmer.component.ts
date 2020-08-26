import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-farmer',
  templateUrl: './welcome-farmer.component.html',
  styleUrls: ['./welcome-farmer.component.css']
})
export class WelcomeFarmerComponent implements OnInit {
farmerName:String;
  ngOnInit(): void {
    this.farmerName=sessionStorage.getItem('FarmerName');
  }
  logout()
  {
    sessionStorage.clear()
    if(sessionStorage.getItem("farmerEmail")===null)
    {
        this.router.navigate(['/']);
    }
  }

  constructor(private router: Router) {
    
   }

}
