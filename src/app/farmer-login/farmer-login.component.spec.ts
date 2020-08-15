import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerLoginComponent } from './farmer-login.component';

describe('FarmerLoginComponent', () => {
  let component: FarmerLoginComponent;
  let fixture: ComponentFixture<FarmerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
