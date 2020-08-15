import { cropdetails } from '../cropdetails';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-request',
  templateUrl: './sell-request.component.html',
  styleUrls: ['./sell-request.component.css']
})
export class SellRequestComponent implements OnInit {

  crop_typelist=["Cash-Crop","Food-Crop","Horticulture Crops","Plantation Crops"];
  crop_names=[];
  fertilizer_name=["Nitrogen fertilizers", "Nitrogen fertilizers with inhibitors", "Phosphorus fertilizers", "Potassium fertilizers", "Calcium", 
  "magnesium and sulphur Fertilizers", "Micronutrient fertilizers", "Inhibitors", "Organic fertilizers"]
  obj=new cropdetails();
  onselectcroptype(){
    if(this.obj.croptype=="Cash-Crop")
      this.crop_names=["Sugarcane","tobacco", "jute", "cotton", "oilseeds"];
    else if (this.obj.croptype=="Food-Crop")
    this.crop_names=["Wheat","Rice","maize", "millets", "pulses"];
    else if (this.obj.croptype=="Horticulture Crops")
    this.crop_names=["Apple","Banana"];
    else if (this.obj.croptype=="Plantation Crops")
    this.crop_names=["Coffee","Tea","coconut", "rubber"];
    else
      this.crop_names=[];

  }
  constructor() { }

  ngOnInit(): void {
  }

}
