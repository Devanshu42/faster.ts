import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BidderService } from './bidder.service';


@Component({
  selector: 'app-bidder-registration',
  templateUrl: './bidder-registration.component.html',
  styleUrls: ['./bidder-registration.component.css']
})
export class BidderRegistrationComponent implements OnInit {

  constructor(private bidderServe: BidderService) { }

  pass:any
  pass2: any

  onSubmit(f: NgForm)
  {
    if(this.pass!==this.pass2)
    {  
      alert("Please check the passwords.")
    }
    else
    {
    this.bidderServe.sendformdata(f.value).subscribe(data => alert( data.message));
    }
  }

  ngOnInit(): void {
  }

}
