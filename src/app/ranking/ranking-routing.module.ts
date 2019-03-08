import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChampionshipResolver } from './services/championship.resolver';

import { ShellComponent } from './components/shell/shell.component';
import { StandingsComponent } from './components/standings/standings.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TipsComponent } from './components/tips/tips.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    resolve: {
      championship: ChampionshipResolver
    },
    children: [
      { path: '', component: StandingsComponent },
      { path: 'spiele', component: MatchesComponent },
      { path: 'spieler/:slug', component: PlayersComponent },
      { path: 'tipps/:matchId', component: TipsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
