import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderDashboardComponent } from './bidder-dashboard.component';

describe('BidderDashboardComponent', () => {
  let component: BidderDashboardComponent;
  let fixture: ComponentFixture<BidderDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
