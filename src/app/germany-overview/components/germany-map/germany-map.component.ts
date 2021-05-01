import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATES, State } from '@common';

/**
 * Component in charge to display the map of Germany.
 * Allow selection of stated.
 */
@Component({
	selector: 'app-germany-map',
	templateUrl: './germany-map.component.html',
	styleUrls: ['./germany-map.component.scss']
})
export class GermanyMapComponent {
	@Input() height = '100%';
	@Input() width = '100%';
	public svgPaths = STATES;
	public pathSelected: State;

	/** Emit the selected state or the unselection of a state */
	@Output() elementOnClick: EventEmitter<State> = new EventEmitter<State>();

	constructor() {
		this.pathSelected = Object.create({}) as State;
	}

	/** Function triggered when user click on a state to select or unselect. */
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
