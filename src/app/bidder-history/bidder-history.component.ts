import { Component, OnInit } from '@angular/core';
import { BidHistoryService } from './bid-history.service';

@Component({
  selector: 'app-bidder-history',
  templateUrl: './bidder-history.component.html',
  styleUrls: ['./bidder-history.component.css']
})
export class BidderHistoryComponent implements OnInit {

  public items = [];
  bidderemail: string;
  constructor(private serve: BidHistoryService) { }

  ngOnInit(): void 
  {
    this.bidderemail = sessionStorage.getItem('BidderEmail');
    this.serve.getdata(this.bidderemail).subscribe(data=>this.items=data);
  }

}
