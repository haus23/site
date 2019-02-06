import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { RankingRoutingModule } from './ranking-routing.module';
import { StandingsComponent } from './components/standings/standings.component';

@NgModule({
  declarations: [StandingsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
