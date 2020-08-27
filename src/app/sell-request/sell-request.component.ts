import { cropname } from './cropname';
import { cropdetails } from './cropdetails';
import { sellRequest } from './sellRequest';
import { Component, OnInit } from '@angular/core';
import { SellRequestService } from './sell-request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {

  crop_typelist=["CashCrop","FoodCrop","HorticultureCrop","PlantationCrop"];
  crop_names=[];
  fertilizer_name=["Nitrogen fertilizers", "Nitrogen fertilizers with inhibitors", "Phosphorus fertilizers", "Potassium fertilizers", "Calcium", 
  "magnesium and sulphur Fertilizers", "Micronutrient fertilizers", "Inhibitors", "Organic fertilizers"]
  obj=new cropdetails();

 onselectcroptype(){
  this.service.getcropnames(this.obj.croptype).subscribe(
    data=>{
        this.crop_names=data;
    }
  )
 }
  constructor(private service: SellRequestService, private router: Router) { }
  sellObj = new sellRequest();

  ngOnInit(): void 
  {
    this.sellObj.fEmail = sessionStorage.getItem('FarmerEmail');
    this.sellObj.adminApprove = 0;
  }
  onSubmit(sellObj: sellRequest)
  {
    this.service.sendSellReq(sellObj).subscribe(data=>console.log(JSON.stringify(data)));
    alert("Your Sell Request Placed Successfully")
  }
}
