import { TestBed } from '@angular/core/testing';

import { SellRequestService } from './sell-request.service';

describe('SellRequestService', () => {
  let service: SellRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
