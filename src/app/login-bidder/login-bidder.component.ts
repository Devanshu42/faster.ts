import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { BloginService } from './blogin.service';
import { BidderLogin } from './bidderLogin';

@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {

  email:any
  password:any
  message:any

  constructor(private bserve: BloginService, private router: Router) { }

  onSubmit(f: NgForm)
  {
    var bidderLog = new BidderLogin();
    bidderLog.email = this.email;
    bidderLog.password = this.password;
    this.bserve.login(bidderLog).subscribe(
      user=>{
        alert(JSON.stringify(user))

        if(user.status=='SUCCESS')
        {
          let bidderEmail = user.email;
          let bidderName = user.bName;
          sessionStorage.setItem('FarmerName', bidderName);
          sessionStorage.setItem('FarmerEmail', bidderEmail);
          this.router.navigate(['welcome-farmer']);
        }
        else
        {
          this.message=user.message
        }
      }
    )
  }

  ngOnInit(): void {
  }

}