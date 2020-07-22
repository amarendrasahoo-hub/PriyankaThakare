import { TestBed } from '@angular/core/testing';

import { UatService } from './uat.service';

describe('UatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UatService = TestBed.get(UatService);
    expect(service).toBeTruthy();
  });
});
