import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { StandingsComponent } from './components/standings/standings.component';

@NgModule({
  declarations: [StandingsComponent],
  imports: [
    CommonModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
