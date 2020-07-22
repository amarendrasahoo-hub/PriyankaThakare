import { TestBed } from '@angular/core/testing';

import { MyAssetService } from './my-asset.service';

describe('MyAssetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyAssetService = TestBed.get(MyAssetService);
    expect(service).toBeTruthy();
  });
});
