import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';
import { Round } from '../../models/round';

import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { Match } from '../../models/match';
import { Tip } from '../../models/tip';

@Component({
  selector: 'ranking-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  playerCogIcon = faUsersCog;
  playerModalOn = false;

  allPlayers: Player[];
  player: Player;

  allRounds: Round[];
  private _selectedRound: Round;

  matches: Match[];

  tips: { [matchId: number]: Tip};

  constructor(private state: StateService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: { slug?: string }) => {
      if (!params.slug) {
        this.player = this.state.players[0];
      } else {
        this.player = this.state.players.find(p => p.slug === params.slug);
      }
      this.tips = Object.assign({},...this.state.tips.filter( t => t.playerId === this.player.id )
        .map( t => ({ [t.matchId]: t })));
    });
    this.allPlayers = [...this.state.players].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

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
