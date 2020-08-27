import { Component, OnInit } from '@angular/core';
import { AdminApproveService } from './admin-approve.service';

@Component({
  selector: 'app-admin-approve-bids',
  templateUrl: './admin-approve-bids.component.html',
  styleUrls: ['./admin-approve-bids.component.css']
})
export class AdminApproveBidsComponent implements OnInit {

  constructor(private serve: AdminApproveService) { }

  public items = []

  approve(item: any[])
  {
    this.serve.approvebid(JSON.stringify(item[0])).subscribe();
  }
  ngOnInit(): void 
  {
    this.serve.getallbids().subscribe(data=> this.items=data)
  }
}
