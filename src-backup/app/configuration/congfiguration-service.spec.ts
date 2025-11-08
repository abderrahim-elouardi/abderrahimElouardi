import { TestBed } from '@angular/core/testing';

import { CongfigurationService } from './congfiguration-service';

describe('CongfigurationService', () => {
  let service: CongfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
