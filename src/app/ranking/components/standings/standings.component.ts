import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Championship } from '../../models/championship';

@Component({
  selector: 'ranking-standings',
  templateUrl: './standings.component.html',
  styles: []
})
export class StandingsComponent implements OnInit {

  currentChampionship: Championship;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.state.currentChampionship$.subscribe( c => { this.currentChampionship = c; });
  }

}
