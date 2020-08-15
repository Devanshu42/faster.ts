import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginselect',
  template: `
    <h2 style="text-align: center;">
    <a routerLink='/farmer-login'>Farmer Registration</a>&nbsp;&nbsp;&nbsp;
    <a routerLink='/bidder-login'>Bidder Registration</a>&nbsp;&nbsp;&nbsp;
    </h2>
  `,
  styles: [
  ]
})
export class LoginselectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
