import { TestBed } from '@angular/core/testing';

import { NuitmodeService } from './nuitmode-service';

describe('NuitmodeService', () => {
  let service: NuitmodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuitmodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
