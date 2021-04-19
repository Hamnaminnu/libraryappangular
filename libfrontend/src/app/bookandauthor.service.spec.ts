import { TestBed } from '@angular/core/testing';

import { BookandauthorService } from './bookandauthor.service';

describe('BookandauthorService', () => {
  let service: BookandauthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookandauthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
