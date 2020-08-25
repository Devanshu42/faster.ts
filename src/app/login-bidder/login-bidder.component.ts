import { Component, OnInit } from '@angular/core';
import { cropdetails } from '../cropdetails';

@Component({
  selector: 'app-login-bidder',
  templateUrl: './login-bidder.component.html',
  styleUrls: ['./login-bidder.component.css']
})
export class LoginBidderComponent implements OnInit {

  constructor() { }
  obj = new cropdetails();

  ngOnInit(): void {
  }

}
