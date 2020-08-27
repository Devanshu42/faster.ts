import { TestBed } from '@angular/core/testing';

import { AdminApproveService } from './admin-approve.service';

describe('AdminApproveService', () => {
  let service: AdminApproveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminApproveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
