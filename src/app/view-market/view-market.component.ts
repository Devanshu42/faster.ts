import { Component, OnInit } from '@angular/core';
import {SellReqhistoryService} from './sell-reqhistory.service'
import {sellhistory} from './reqhistory'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-market',
  templateUrl: './view-market.component.html',
  styleUrls: ['./view-market.component.css']
})
export class ViewMarketComponent implements OnInit {
email:string=sessionStorage.getItem('FarmerEmail');
farmerName:string=sessionStorage.getItem('FarmerName');
public items =[];
index:number

  constructor(private sellreq:SellReqhistoryService) { }

  ngOnInit(): void {
this.sellreq.getdata(this.email).subscribe(
  data=>{
    console.log(JSON.stringify(data))
      this.items=data;
      console.log(JSON.stringify(this.items))
  },
  error=>{
    console.log("error")
  }
)
  

  }

}
