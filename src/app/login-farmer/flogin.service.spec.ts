import { TestBed } from '@angular/core/testing';

import { FloginService } from './flogin.service';

describe('FloginService', () => {
  let service: FloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
