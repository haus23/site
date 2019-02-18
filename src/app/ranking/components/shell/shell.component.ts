import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Championship } from '../../models/championship';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ranking-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  championship: Championship;

  constructor(private state: StateService) {
  }

  ngOnInit() {
    this.state.currentChampionship$.subscribe(
      c => { this.championship = c; }
    );
  }

}
