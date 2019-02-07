import { TestBed } from '@angular/core/testing';

import { ChampionshipsResolver } from './championships.resolver';

describe('ChampionshipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChampionshipsResolver = TestBed.get(ChampionshipsResolver);
    expect(service).toBeTruthy();
  });
});
