import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingsComponent } from './components/standings/standings.component';
import { ChampionshipsResolver } from './services/championships.resolver';
import { ShellComponent } from './components/shell/shell.component';
import { CurrentChampionshipResolver } from './services/current-championship.resolver';

const routes: Routes = [
  {
    path: 'tipprunde',
    component: ShellComponent,
    resolve: {
      championships: ChampionshipsResolver
    },
    children: [
      { 
        path: '', 
        component: StandingsComponent,
        resolve: {
          currentChampionship: CurrentChampionshipResolver
        } 
      },
      { 
        path: ':slug', 
        component: StandingsComponent,
        resolve: {
          currentChampionship: CurrentChampionshipResolver
        } 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
