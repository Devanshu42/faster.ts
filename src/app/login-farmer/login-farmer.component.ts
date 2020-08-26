import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { FloginService } from './flogin.service';
import { Farmerlogin } from './farmerlogin';

@Component({
  selector: 'app-login-farmer',
  templateUrl: './login-farmer.component.html',
  styleUrls: ['./login-farmer.component.css']
})
export class LoginFarmerComponent implements OnInit {
  email:any
  password:any
  message:any

  constructor(private fserve: FloginService, private router: Router) { }

  onSubmit(f: NgForm)
  {
    var farmlog = new Farmerlogin();
    farmlog.email = this.email;
    farmlog.password = this.password;
    this.fserve.login(farmlog).subscribe(
      user=>{
        //alert(JSON.stringify(user))

        if(user.status=='SUCCESS')
        {
          let farmerName = user.name;
          let farmerEmail = user.email;
          sessionStorage.setItem('FarmerName', farmerName);
          sessionStorage.setItem('FarmerEmail', farmerEmail);
          this.router.navigate(['welcome-farmer']);
        }
        else
        {
          this.message=user.message
          alert(this.message)
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
