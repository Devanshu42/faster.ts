import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllFarmersComponent } from './admin-all-farmers.component';

describe('AdminAllFarmersComponent', () => {
  let component: AdminAllFarmersComponent;
  let fixture: ComponentFixture<AdminAllFarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAllFarmersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAllFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
