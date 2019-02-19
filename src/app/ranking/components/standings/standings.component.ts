import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Championship } from '../../models/championship';
import { Player } from '../../models/player';

@Component({
  selector: 'ranking-standings',
  templateUrl: './standings.component.html'
})
export class StandingsComponent implements OnInit {

  championship: Championship;
  standings: Player[];

  constructor(private state: StateService) { }

  ngOnInit() {
    this.championship = this.state.currentChampionship;
    this.standings = this.state.players;
  }

}
