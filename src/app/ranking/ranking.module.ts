import { NgModule } from '@angular/core';

import { RankingRoutingModule } from './ranking-routing.module';
import { StandingsComponent } from './components/standings/standings.component';
import { ShellComponent } from './components/shell/shell.component';
import { SharedModule } from '../shared/shared.module';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [StandingsComponent, ShellComponent, PlayersComponent],
  imports: [
    SharedModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
