import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Championship } from '../../models/championship';

import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'ranking-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  reloadIcon = faRedo;
  alertVisible = false;

  championship: Championship;

  constructor(private state: StateService, private updates: SwUpdate) {
    updates.available.subscribe( ev => {
      this.alertVisible = true;
    });
  }

  ngOnInit() {
    this.championship = this.state.currentChampionship;

  }

  update() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
