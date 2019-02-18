import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StandingsComponent } from './components/standings/standings.component';
import { ShellComponent } from './components/shell/shell.component';
import { ChampionshipResolver } from './services/championship.resolver';

const routes: Routes = [
  {
    path: 'tipprunde',
    component: ShellComponent,
    resolve: {
      championship: ChampionshipResolver
    },
    children: [
      {
        path: '',
        component: StandingsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
