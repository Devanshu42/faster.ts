import { TestBed } from '@angular/core/testing';

import { AdmLoginService } from './adm-login.service';

describe('AdmLoginService', () => {
  let service: AdmLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
