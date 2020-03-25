import { TestBed } from '@angular/core/testing';

import { GetLyricService } from './get-lyric.service';

describe('GetLyricsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLyricService = TestBed.get(GetLyricService);
    expect(service).toBeTruthy();
  });
});
