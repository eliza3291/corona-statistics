import { Component } from '@angular/core';
import { Path } from '@common';

@Component({
  templateUrl: './germany-overview.component.html',
  styleUrls: ['./germany-overview.component.scss']
})
export class GermanyOverviewComponent {
  constructor() {}

  onClick(state: Path) {
    console.log('onClick', state);
  }
}
