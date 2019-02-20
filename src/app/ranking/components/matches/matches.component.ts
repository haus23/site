import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Round } from '../../models/round';
import { Match } from '../../models/match';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ranking-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  rounds: Round[];
  roundNr: number;
  matches: Match[];

  constructor(private state: StateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.rounds = this.state.rounds;

    this.route.paramMap.subscribe( params => {
      this.roundNr = params.has('nr') ? parseInt(params.get('nr')) : 1;
      const roundIx =  this.roundNr - 1;
      this.matches = this.state.matches.filter( m => m.roundId === this.rounds[roundIx].id);
    });
  }
}
