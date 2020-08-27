import { TestBed } from '@angular/core/testing';

import { BidHistoryService } from './bid-history.service';

describe('BidHistoryService', () => {
  let service: BidHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
