import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STATES, State } from '@common';

@Component({
	selector: 'app-germany-map',
	templateUrl: './germany-map.component.html',
	styleUrls: ['./germany-map.component.scss']
})
export class GermanyMapComponent {
	@Input() height = '100%';
	@Input() width = '100%';

	@Output() elementOnClick: EventEmitter<State> = new EventEmitter<State>();

	public svgPaths: State[] = STATES;
	public pathSelected: State = Object.create(null);

	constructor() {}

	onClick(event: any, state: State = Object.create(null)): void {
		event.stopPropagation();
		if (state.id) {
			this.pathSelected = this.pathSelected.id === state.id ? Object.create(null) : state;
		} else {
			this.pathSelected = Object.create(null);
		}
		this.elementOnClick.emit(this.pathSelected);
	}
}
