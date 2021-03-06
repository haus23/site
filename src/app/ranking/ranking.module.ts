import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { RankingRoutingModule } from './ranking-routing.module';

import { ShellComponent } from './components/shell/shell.component';
import { StandingsComponent } from './components/standings/standings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TipsComponent } from './components/tips/tips.component';

@NgModule({
  declarations: [
    ShellComponent,
    StandingsComponent,
    MatchesComponent,
    PlayersComponent,
    TipsComponent
  ],
  imports: [
    SharedModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
