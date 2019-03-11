import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';
import { Player } from '../../models/player';
import { Tip } from '../../models/tip';

@Component({
  selector: 'ranking-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  match: Match;
  players: { [playerId: number]: Player};
  tips: Tip[];

  constructor(private state: StateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( map => {
      const id = parseInt(map.get('matchId'));
      this.match = this.state.matches.find( m => m.id === id);
      this.tips = this.state.tips.filter( t => t.matchId === id)
        .sort( (a, b) => {
          // Sortiere nach Punkten
          if( a.points !== b.points ) {
            return b.points - a.points;
          } else {

            // Test auf leeren Tipp
            if (a.result.length === 0) return 1;
            if (b.result.length === 0) return -1;

            // Bei Punktgleichheit
            const homegoalsA = parseInt(a.result.split(':')[0]);
            const awaygoalsA = parseInt(a.result.split(':')[1]);
            const homegoalsB = parseInt(b.result.split(':')[0]);
            const awaygoalsB = parseInt(b.result.split(':')[1]);
            const diffA = homegoalsA - awaygoalsA;
            const diffB = homegoalsB - awaygoalsB;

            // Sortiere nach Tordifferenz
            if ( diffA !== diffB ) {
              return diffB - diffA
            } else {
              // Bei gleicher Differenz sortiere nach Heimtoren,
              // falls es Punkte gab oder ein Unentschieden war
              if( a.points > 0 || diffA === 0) {
                return homegoalsB - homegoalsA;
              } else {
                return homegoalsA - homegoalsB;
              }
            }
          }
        });
    });
    this.players = Object.assign({},...this.state.players
        .map( p => ({ [p.id]: p })));
  }

}
