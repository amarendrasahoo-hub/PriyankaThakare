import { TestBed } from '@angular/core/testing';

import { WebmailaccessService } from './webmailaccess.service';

describe('WebmailaccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebmailaccessService = TestBed.get(WebmailaccessService);
    expect(service).toBeTruthy();
  });
});
