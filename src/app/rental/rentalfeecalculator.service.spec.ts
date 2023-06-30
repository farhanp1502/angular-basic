import { TestBed } from '@angular/core/testing';

import { RentalfeecalculatorService } from './rentalfeecalculator.service';

describe('RentalfeecalculatorService', () => {
  let service: RentalfeecalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalfeecalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
