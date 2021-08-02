import { TestBed } from '@angular/core/testing';

import { G1Guard } from './g1.guard';

describe('G1Guard', () => {
  let guard: G1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(G1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
