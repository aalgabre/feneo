import { TestBed } from '@angular/core/testing';

import { LibFeneoService } from './lib-feneo.service';

describe('LibFeneoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibFeneoService = TestBed.get(LibFeneoService);
    expect(service).toBeTruthy();
  });
});
