import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { RankingRoutingModule } from './ranking-routing.module';

import { ShellComponent } from './components/shell/shell.component';
//import { StandingsComponent } from './components/standings/standings.component';
//import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    SharedModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
