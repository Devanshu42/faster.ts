import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellHistoryComponent } from './sell-history.component';

describe('SellHistoryComponent', () => {
  let component: SellHistoryComponent;
  let fixture: ComponentFixture<SellHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
