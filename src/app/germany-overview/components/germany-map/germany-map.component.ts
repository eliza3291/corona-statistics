import { Component, EventEmitter, Input, Output } from '@angular/core';
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

	public svgPaths: State[];
	public pathSelected: State;

	constructor() {
		this.svgPaths = STATES;
		this.pathSelected = Object.create({}) as State;
	}

	onClick(event: MouseEvent, state?: State): void {
		event.stopPropagation();
		if (state && this.pathSelected.id !== state.id) {
			this.pathSelected = state;
		} else {
			this.pathSelected = Object.create({}) as State;
		}
		this.elementOnClick.emit(this.pathSelected);
	}
}
