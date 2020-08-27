import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApproveBidsComponent } from './admin-approve-bids.component';

describe('AdminApproveBidsComponent', () => {
  let component: AdminApproveBidsComponent;
  let fixture: ComponentFixture<AdminApproveBidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminApproveBidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApproveBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
