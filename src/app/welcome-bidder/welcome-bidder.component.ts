import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Bid } from './Bid';


@Component({
  selector: 'app-welcome-bidder',
  templateUrl: './welcome-bidder.component.html',
  styleUrls: ['./welcome-bidder.component.css']
})
export class WelcomeBidderComponent implements OnInit 
{
  iwillhide=false
  items=[{sellid: 1, croptype:"Food Crop", cropname:"Wheat", baseprice:1000, currentbid:1500},
       {sellid: 2, croptype:"Food Crop", cropname:"Rice", baseprice:2000, currentbid:2100},
       {sellid: 3, croptype:"Cash Crop", cropname:"Sugarcane", baseprice:3500, currentbid:3600}];

  constructor(private router: Router, private refresh: AppComponent) { }

  bidderName:String;
  bidamount:number;
  bid = new Bid();

  placebid(item: any)
  {
    this.bid.sellid = item.sellid;
    console.log(item.sellid, 'okay');
  }

  confirm()
  {
    console.log('sellid:', this.bid.sellid, ' email: ', this.bid.bEmail, ' amount: ', this.bidamount) 
  }

  ngOnInit(): void 
  {
    // if(this.bidderName==null)
    // {
    //   this.router.navigate(['login-bidder'])
    // }
    this.bidderName=sessionStorage.getItem('BidderName');
    this.refresh.ngOnInit();
    
    this.bid.bEmail = sessionStorage.getItem('BidderEmail');
  }

}
