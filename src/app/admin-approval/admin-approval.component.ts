import { Component, OnInit } from '@angular/core';
import { ApprovalService } from './approval.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css']
})
export class AdminApprovalComponent implements OnInit {

  constructor(private adminapprove: ApprovalService) { }

  public items = []
  approve(item: any[])
  {
    this.adminapprove.sendapproval(JSON.stringify(item[0])).subscribe();
    item[6] = 'Approved!';
  }

  reject(item: any[])
  {
    this.adminapprove.sendrejection(JSON.stringify(item[0])).subscribe();
    item[6]= 'Rejected!!';
  }

  ngOnInit(): void 
  {
    this.adminapprove.getallrequests().subscribe(data=> this.items=data)
  }

}
