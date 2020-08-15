import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderLoginComponent } from './bidder-login.component';

describe('BidderLoginComponent', () => {
  let component: BidderLoginComponent;
  let fixture: ComponentFixture<BidderLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
