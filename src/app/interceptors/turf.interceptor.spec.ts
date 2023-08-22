import { TestBed } from '@angular/core/testing';

import { TurfInterceptor } from './turf.interceptor';

describe('TurfInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TurfInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TurfInterceptor = TestBed.inject(TurfInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
