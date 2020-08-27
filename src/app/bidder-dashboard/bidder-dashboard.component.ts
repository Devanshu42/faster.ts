import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bidder-dashboard',
  templateUrl: './bidder-dashboard.component.html',
  styleUrls: ['./bidder-dashboard.component.css']
})
export class BidderDashboardComponent implements OnInit {

  constructor(private refresh: AppComponent) { }
  biddername: string;

  ngOnInit(): void {
    
    this.biddername = sessionStorage.getItem('BidderName');
    this.refresh.ngOnInit();
  }

}
