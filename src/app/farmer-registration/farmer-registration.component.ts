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

  email: any
  pass:any
  pass2: any

  ngOnInit(): void 
  {

  }

  onSubmit(f: NgForm)
  {
    if(this.pass!==this.pass2)
    {
      alert("Please check the passwords.")
    }
    else
    {
      this.fServe.mail(this.email).subscribe();
      this.fServe.sendformdata(f.value).subscribe(data => alert(data.message));
    }
  }  
}
