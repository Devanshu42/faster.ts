import { TestBed } from '@angular/core/testing';

import { SellReqhistoryService } from './sell-reqhistory.service';

describe('SellReqhistoryService', () => {
  let service: SellReqhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellReqhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
