import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Path } from '@common';
import { PATHS } from '@common';

@Component({
  selector: 'app-germany-map',
  templateUrl: './germany-map.component.html',
  styleUrls: ['./germany-map.component.scss']
})
export class GermanyMapComponent implements OnInit {
  @Input() height: string = '100%';
  @Input() width: string = '100%';

  @Output() elementOnClick: EventEmitter<Path> = new EventEmitter<Path>();

  public svgPaths: Path[] = PATHS;
  public pathSelected: Path = Object.create(null);

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any, state: Path = Object.create(null)) {
    event.stopPropagation();
    this.elementOnClick.emit(state);
    if (state) {
      this.pathSelected = this.pathSelected.id === state.id ? Object.create(null) : state;
    } else {
      this.pathSelected = Object.create(null);
    }
  }
}
