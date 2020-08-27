import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome-bidder',
  templateUrl: './welcome-bidder.component.html',
  styleUrls: ['./welcome-bidder.component.css']
})
export class WelcomeBidderComponent implements OnInit {
  iwillhide=false
  items=[{croptype:"Food Crop",cropname:"Wheat",baseprice:1000,currentbid:1500},
       {croptype:"Food Crop",cropname:"Rice",baseprice:2000,currentbid:2100},
       {croptype:"Cash Crop",cropname:"Sugarcane",baseprice:3500,currentbid:3600}];
  constructor(private router: Router, private refresh: AppComponent) { }
  bidderName:String;

  ngOnInit(): void {
    this.bidderName=sessionStorage.getItem('BidderName');
    this.refresh.ngOnInit();
  }

}
