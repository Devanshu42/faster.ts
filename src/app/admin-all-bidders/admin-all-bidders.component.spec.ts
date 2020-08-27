import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllBiddersComponent } from './admin-all-bidders.component';

describe('AdminAllBiddersComponent', () => {
  let component: AdminAllBiddersComponent;
  let fixture: ComponentFixture<AdminAllBiddersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllBiddersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
