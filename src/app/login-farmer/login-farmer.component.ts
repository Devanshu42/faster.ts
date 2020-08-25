import { Component, OnInit } from '@angular/core';
import { cropdetails } from '../cropdetails';

@Component({
  selector: 'app-login-farmer',
  templateUrl: './login-farmer.component.html',
  styleUrls: ['./login-farmer.component.css']
})
export class LoginFarmerComponent implements OnInit {

  constructor() { }
  obj = new cropdetails();

  ngOnInit(): void {
  }

}
