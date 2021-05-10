import { TestBed } from '@angular/core/testing';

import { CovidAPIService } from './covid-api.service';

describe('CovidAPIService', () => {
  let service: CovidAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
