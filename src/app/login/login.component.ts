import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { AdmLoginService } from './adm-login.service';
import { AdminLogin } from './adminLogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any
  password:any
  message:any

  constructor(private admserve: AdmLoginService, private router: Router) { }

  onSubmit(f: NgForm)
  {
    var bidderLog = new AdminLogin();
    bidderLog.email = this.email;
    bidderLog.password = this.password;
    this.admserve.login(bidderLog).subscribe(
      user=>{
        // alert(JSON.stringify(user))

        if(user.status=='SUCCESS')
        {
          let adminEmail = user.email;
          let adminName = user.bName;
          sessionStorage.setItem('FarmerName', adminName);
          sessionStorage.setItem('FarmerEmail', adminEmail);
          this.router.navigate(['welcome-bidder']);
        }
        else
        {
          alert("Invalid Email/Password. Please try again")
          this.message=user.message
        }
      }
    )
  }

  ngOnInit(): void
  {
  }

}
