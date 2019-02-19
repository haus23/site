import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';
import { Round } from '../../models/round';

@Component({
  selector: 'ranking-players',
  templateUrl: './players.component.html'
})
export class PlayersComponent implements OnInit {

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
    this.rounds = this.appState.rounds;
  }

}
