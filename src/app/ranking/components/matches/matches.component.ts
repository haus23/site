import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

import { Round } from '../../models/round';
import { Match } from '../../models/match';

@Component({
  selector: 'ranking-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  allRounds: Round[];
  private _selectedRound: Round;

  rounds: Round[];
  roundNr: number;
  matches: Match[];

  constructor(private state: StateService) { }

  ngOnInit() {
    this.allRounds = this.state.rounds;
    this.selectedRound = this.allRounds.slice(-1)[0];
  }

  get selectedRound() {
    return this._selectedRound;
  }

  set selectedRound(round: Round) {
    this._selectedRound = round;
    this.matches = this.state.matches.filter( m => m.roundId === round.id );
  }
}
