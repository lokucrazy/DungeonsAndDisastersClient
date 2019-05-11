import { TestBed } from '@angular/core/testing';

import { GetsessionsService } from './getsessions.service';

describe('GetsessionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetsessionsService = TestBed.get(GetsessionsService);
    expect(service).toBeTruthy();
  });
});
