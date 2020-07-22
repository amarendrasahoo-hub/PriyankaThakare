import { TestBed } from '@angular/core/testing';

import { UsbaccessService } from './usbaccess.service';

describe('UsbaccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsbaccessService = TestBed.get(UsbaccessService);
    expect(service).toBeTruthy();
  });
});
