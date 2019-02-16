import { TestBed } from '@angular/core/testing';

import { ChampionshipResolver } from './championship.resolver';

describe('ChampionshipResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChampionshipResolver = TestBed.get(ChampionshipResolver);
    expect(service).toBeTruthy();
  });
});
