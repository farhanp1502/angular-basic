import { TestBed } from '@angular/core/testing';

import { FlopserviceService } from './flopservice.service';

describe('FlopserviceService', () => {
  let service: FlopserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlopserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
