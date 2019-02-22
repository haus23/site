import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';
import { Round } from '../../models/round';

import { faUsersCog } from '@fortawesome/free-solid-svg-icons';

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
  rounds: Round[];

  constructor(private appState: StateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params: { slug?: string }) => {
      if (!params.slug) {
        this.player = this.appState.players[0];
      } else {
        this.player = this.appState.players.find( p => p.slug === params.slug );
      }
    });
    this.allPlayers = [...this.appState.players].sort( (a,b) => {
      return a.name.localeCompare(b.name);
     });
    this.rounds = this.appState.rounds;
  }

}
