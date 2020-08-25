import { TestBed } from '@angular/core/testing';

import { BidderService } from './bidder.service';

describe('BidderService', () => {
  let service: BidderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
