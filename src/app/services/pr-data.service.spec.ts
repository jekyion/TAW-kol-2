import { TestBed } from '@angular/core/testing';

import { PRDataService } from './pr-data.service';

describe('PRDataService', () => {
  let service: PRDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PRDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
