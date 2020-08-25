import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBidderComponent } from './login-bidder.component';

describe('LoginBidderComponent', () => {
  let component: LoginBidderComponent;
  let fixture: ComponentFixture<LoginBidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
