import { TestBed } from '@angular/core/testing';

import { CreatecrService } from './createcr.service';

describe('CreatecrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatecrService = TestBed.get(CreatecrService);
    expect(service).toBeTruthy();
  });
});
