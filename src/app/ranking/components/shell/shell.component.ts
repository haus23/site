import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Championship } from '../../models/championship';

@Component({
  selector: 'ranking-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {

  championships: Championship[];

  constructor(private state: StateService) {
    state.championships$.subscribe( cs => {
      this.championships = cs;
    });
  }

  ngOnInit() {
  }

}
