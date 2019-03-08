import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { ActivatedRoute } from '@angular/router';
import { Match } from '../../models/match';

@Component({
  selector: 'ranking-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent implements OnInit {

  match: Match;

  constructor(private state: StateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( map => {
      const id = parseInt(map.get('matchId'));
      this.match = this.state.matches.find( m => m.id === id);
    });
  }

}
