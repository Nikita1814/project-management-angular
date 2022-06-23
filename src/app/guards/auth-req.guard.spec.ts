import { TestBed } from '@angular/core/testing';

import { AuthReqGuard } from './auth-req.guard';

describe('AuthReqGuard', () => {
  let guard: AuthReqGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthReqGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
