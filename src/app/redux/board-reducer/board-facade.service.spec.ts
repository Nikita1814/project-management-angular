import { TestBed } from '@angular/core/testing';

import { BoardFacadeService } from './board-facade.service';

describe('BoardFacadeService', () => {
  let service: BoardFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
