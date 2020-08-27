import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderHistoryComponent } from './bidder-history.component';

describe('BidderHistoryComponent', () => {
  let component: BidderHistoryComponent;
  let fixture: ComponentFixture<BidderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
