import { TestBed } from '@angular/core/testing';

import { RollingStoneService } from './rolling-stone.service';

describe('RollingStoneService', () => {
  let service: RollingStoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RollingStoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
