import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <h2 style="text-align: center;">
    Oops, you dropped at an invalid URL. <br><br>
    <a routerLink='/'>Home</a>&nbsp;&nbsp;&nbsp;
    </h2>
  `,
  styles: [
  ]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
