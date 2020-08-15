import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBidderComponent } from './welcome-bidder.component';

describe('WelcomeBidderComponent', () => {
  let component: WelcomeBidderComponent;
  let fixture: ComponentFixture<WelcomeBidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeBidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
