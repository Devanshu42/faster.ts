import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFarmerComponent } from './welcome-farmer.component';

describe('WelcomeFarmerComponent', () => {
  let component: WelcomeFarmerComponent;
  let fixture: ComponentFixture<WelcomeFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
