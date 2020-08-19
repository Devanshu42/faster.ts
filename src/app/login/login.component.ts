import { Component, OnInit } from '@angular/core';
import { cropdetails } from '../cropdetails';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  obj= new cropdetails();
  appear= false;

  ngOnInit(): void
  {
  }

}
