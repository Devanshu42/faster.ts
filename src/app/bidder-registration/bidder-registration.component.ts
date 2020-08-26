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

  onSubmit(f: NgForm)
  {
    this.bidderServe.sendformdata(f.value).subscribe(data => alert( data.message));
  
  }

  ngOnInit(): void {
  }

}
