import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FarmerService } from './farmerservice';

@Component({
  selector: 'app-farmer-registration',
  templateUrl: './farmer-registration.component.html',
  styleUrls: ['./farmer-registration.component.css']
})
export class FarmerRegistrationComponent implements OnInit {

  constructor(private fServe: FarmerService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm)
  {
    this.fServe.sendformdata(f.value).subscribe(data => alert( data.message));
  }

}
