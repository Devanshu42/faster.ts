import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget',
  template: `
    <h3 style="text-align:center;">
    <br>
    Enter your registered email : <br><br>
    <input type="text" style="padding:0.7%;" placeholder="Email"/>

    <br><br><br>

    <button class="loginbutton">Reset Password</button>&nbsp;&nbsp;&nbsp;
    <button routerLink='/' class="loginbutton">Home</button>&nbsp;&nbsp;&nbsp;
    </h3>

  `,
  styles: [`
    .loginbutton{
      padding: 0.7%;
      font-size: large;    
      }
      `
    
  ]
})
export class ForgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
