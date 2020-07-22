import { TestBed } from '@angular/core/testing';

import { SharedfolderService } from './sharedfolder.service';

describe('SharedfolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedfolderService = TestBed.get(SharedfolderService);
    expect(service).toBeTruthy();
  });
});
