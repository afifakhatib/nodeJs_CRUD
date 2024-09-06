import { TestBed } from '@angular/core/testing';

import { DailogboxService } from './dailogbox.service';

describe('DailogboxService', () => {
  let service: DailogboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailogboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
