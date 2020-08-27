import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bid } from './Bid';
import { BidService } from './bid.service';


@Component({
  selector: 'app-welcome-bidder',
  templateUrl: './welcome-bidder.component.html',
  styleUrls: ['./welcome-bidder.component.css']
})
export class WelcomeBidderComponent implements OnInit 
{
  iwillhide=false

//   public itemzz = [
//     [
//         4,
//         5.0,
//         "Sugarcane",
//         5000.0,
//         "08-05-1997",
//         55.0
//     ],
//     [
//         2,
//         2.0,
//         "Tamatar",
//         6923.0,
//         "04-12-2020",
//         70.0
//     ],
//     [
//         6,
//         50.0,
//         "OilSeeds",
//         10000.0,
//         "04-12-2020",
//         null
//     ],
//     [
//         5,
//         50.0,
//         "Apple",
//         5000.0,
//         "04-12-2020",
//         null
//     ],
//     [
//         3,
//         10.0,
//         "Rice",
//         5100.0,
//         "04-12-2020",
//         null
//     ]
// ]
  public items: any;

  constructor(private router: Router) { }

  bidderName:String;
  currentPrice:number;
  bid = new Bid();
  bidserve: BidService;
  placebid(item: any)
  {
    this.bid.sellId = item.sellId;
  }

  confirm()
  {
    this.bid.currentPrice = this.currentPrice;
    this.bidserve.sendbid(this.bid).subscribe();
    this.ngOnInit();
  }

  ngOnInit(): void 
  {
    // if(this.bidderName==null)
    // {
    //   this.router.navigate(['login-bidder'])
    // }
    this.bidderName = sessionStorage.getItem('BidderName');
    this.bid.bEmail = sessionStorage.getItem('BidderEmail');
    this.bidserve.getitems().subscribe(data=>{
      this.items=data;
    })
  }

}
