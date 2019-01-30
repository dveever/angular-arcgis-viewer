import { TestBed } from '@angular/core/testing';

import { GisService } from './gis.service';

describe('GisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GisService = TestBed.get(GisService);
    expect(service).toBeTruthy();
  });
});
