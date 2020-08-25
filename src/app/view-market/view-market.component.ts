import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-market',
  templateUrl: './view-market.component.html',
  styleUrls: ['./view-market.component.css']
})
export class ViewMarketComponent implements OnInit {
items=[{bid1:100,bid2:200,bid3:300}
]
  constructor() { }

  ngOnInit(): void {
  }

}
