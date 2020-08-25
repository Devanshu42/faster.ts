import { TestBed } from '@angular/core/testing';

import { BloginService } from './blogin.service';

describe('BloginService', () => {
  let service: BloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
