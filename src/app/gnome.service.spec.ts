import { TestBed } from '@angular/core/testing';

import { GnomeService } from './gnome.service';

describe('GnomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GnomeService = TestBed.get(GnomeService);
    expect(service).toBeTruthy();
  });
});
