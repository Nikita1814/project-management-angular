import { TestBed } from '@angular/core/testing';

import { BoardListFacadeService } from './board-list-facade.service';

describe('BoardFacadeService', () => {
  let service: BoardListFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardListFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
