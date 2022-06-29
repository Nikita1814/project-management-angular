import { TestBed } from '@angular/core/testing';

import { BoardFormDataService } from './board-form-data.service';

describe('BoardFormDataService', () => {
  let service: BoardFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
