import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bidder-dashboard',
  templateUrl: './bidder-dashboard.component.html',
  styleUrls: ['./bidder-dashboard.component.css']
})
export class BidderDashboardComponent implements OnInit {

  constructor(private refresh: AppComponent, private router: Router) { }
  biddername: string;

  ngOnInit(): void {
    
    this.biddername = sessionStorage.getItem('BidderName');
    this.refresh.ngOnInit();
    if (this.biddername==null)
    {
      this.router.navigate(['login-farmer']);
    }
  }

}
