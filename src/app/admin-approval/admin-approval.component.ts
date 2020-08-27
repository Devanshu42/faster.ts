import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { ApprovalService } from './approval.service';

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.component.html',
  styleUrls: ['./admin-approval.component.css']
})
export class AdminApprovalComponent implements OnInit {

  constructor(private adminapprove: ApprovalService) { }

  public items =[['Horti', 'Rice', '02-11-2020',333, 0],['Horti', 'Whey', '02-4-2020',554, 0],['Mori', 'Weed3', '02-131-2020',4533, 0]];

  approve(item: any[])
  {
    console.log("approved", item[3]);
    // this.adminapprove.sendapproval(JSON.stringify(item[3])).subscribe()
    item[4] = 'Approved!';
  }

  reject(item: any[])
  {
    console.log("rejected ", item[1]);
    // this.message = 'Rejected!!';

    item[4] = 'Rejected!!'
  }

  ngOnInit(): void {
  }

}
