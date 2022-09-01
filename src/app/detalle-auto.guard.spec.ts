import { TestBed } from '@angular/core/testing';

import { DetalleAutoGuard } from './detalle-auto.guard';

describe('DetalleAutoGuard', () => {
  let guard: DetalleAutoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetalleAutoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
