import { TestBed } from '@angular/core/testing';

import { G2Guard } from './g2.guard';

describe('G2Guard', () => {
  let guard: G2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(G2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
