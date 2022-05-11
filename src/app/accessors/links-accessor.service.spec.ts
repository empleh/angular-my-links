import { TestBed } from '@angular/core/testing';

import { LinksAccessorService } from './links-accessor.service';

describe('LinksAccessorService', () => {
  let service: LinksAccessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinksAccessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
