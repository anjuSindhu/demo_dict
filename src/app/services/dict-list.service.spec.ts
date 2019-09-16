import { TestBed } from '@angular/core/testing';

import { DictListService } from './dict-list.service';

describe('DictListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DictListService = TestBed.get(DictListService);
    expect(service).toBeTruthy();
  });
});
