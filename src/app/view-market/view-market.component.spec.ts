import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMarketComponent } from './view-market.component';

describe('ViewMarketComponent', () => {
  let component: ViewMarketComponent;
  let fixture: ComponentFixture<ViewMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
