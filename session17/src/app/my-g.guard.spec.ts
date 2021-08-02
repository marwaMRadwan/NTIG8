import { TestBed } from '@angular/core/testing';

import { MyGGuard } from './my-g.guard';

describe('MyGGuard', () => {
  let guard: MyGGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyGGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
