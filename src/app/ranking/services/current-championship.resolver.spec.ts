import { TestBed } from '@angular/core/testing';

import { CurrentChampionshipResolver } from './current-championship.resolver';

describe('CurrentChampionship.ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentChampionshipResolver = TestBed.get(CurrentChampionshipResolver);
    expect(service).toBeTruthy();
  });
});
