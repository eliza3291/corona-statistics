import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GermanyMapComponent } from './germany-map.component';

describe('GermanyMapComponent', () => {
	let component: GermanyMapComponent;
	let fixture: ComponentFixture<GermanyMapComponent>;
	let debugElement: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GermanyMapComponent]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(GermanyMapComponent);
				debugElement = fixture.debugElement;
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render 16 states', () => {
		const states = debugElement.nativeElement.querySelectorAll('.land');
		expect(states.length).toBeTruthy(16);
	});

	it('should set class active when state selected', () => {
		component.pathSelected = {
			id: 1,
			abbreviation: 'SH',
			title: 'Schleswig-Holstein',
			path:
				'M180.83,108.38l-1.36,0.98l1.24,0.16l-0.62,1.59l-1.15,-1.66l0.89,-1.35L180.83,108.38zM166.82,66.59l1.3,0.21l-0.29,0.85l1.34,1.39l-1.94,1.67l-1.64,-1.5l-1.03,-2.79l1.26,-1.53L166.82,66.59zM332.49,58.08l5.62,1.05l3.79,1.88l5.37,11.14l-4.22,-1.08l-3.22,0.54l-0.12,-0.77h2.21l-2.47,-0.87l-1.5,0.96l1.27,0.54l-0.59,0.71l-3.67,-0.07l-1.63,-0.79l0.45,-2.49l-0.95,-1.67l-1.44,-0.48l-2.67,0.98l1.58,1.6l-2.51,-1.5l0.1,-4.49l1.22,-2.81l2,-2.62L332.49,58.08zM167.37,57.79l-0.91,4.28l-1.17,-5.25L167.37,57.79zM188.08,55.71l1.26,0.65l-0.91,0.45l-2.08,-0.96L188.08,55.71zM180.99,55.13l-0.39,3.48l-1.18,0.58l0.98,0.28l-0.42,0.9l0.84,1.01l-0.91,-0.84l-1.15,1.61l-3.33,0.36l-1.78,-2.27L173.59,58L180.99,55.13zM171.44,52.84l1.27,2.23l-1.65,0.13l-2.54,-2.17L171.44,52.84zM183.01,46.12l-0.55,1.3l-1.12,-0.33l0.33,-0.94L183.01,46.12zM178.34,44.11l-1.02,2.03l-4,0.6L171,48.56l-1.16,-0.89l0.75,-1.15l6.08,-1.45l1.7,-1.61L178.34,44.11zM181.99,41.14l-0.78,1.5l-1.72,-0.2l1.84,-2.23L181.99,41.14zM160.46,46.18l-0.11,0.9l1.33,0.38l-1.24,0.53l0.96,0.9l-2.42,0.45l-4.45,-6.2l4.47,-5.15l-1.37,2.73l1.47,4.32L160.46,46.18zM169.54,33.33l3.91,1.16l-0.24,1.82l1.03,1.17l-2.04,4.31l-5.29,-0.05l-5.42,-2.37l-0.24,-1.96l2.05,-3.07L169.54,33.33zM163.97,0.73l1.77,0.6l-4.43,0.14l0.29,1l1.71,0.22l0.81,2.06l-3.7,1.92l-1.86,3.29l1.11,7.58l3.58,2.32l11.07,-1.05l2.19,-1.26v-1.39l2.84,-0.08l3,1.94l3.07,0.17l2.32,-1.48l3.05,1.02l2.47,-0.85l3.12,0.25l6.46,3.36l6.15,-0.11l5.77,2.49l0.89,4.46l1.49,-0.21l1.36,1.18l0.73,-0.67l2.42,0.82l2.48,-4.13l1.71,-0.48l1.75,3.48l-0.02,2.41l1.96,-3.79l2.03,0.02l1.09,-1.66l3.54,-2.07l1.1,-2.15l1.54,-0.06l-1.44,3.07l0.98,2l12.03,3.77l3.84,4.81l1.46,0.06l1.17,-2.09l0.71,0.9l-0.01,-3.72l3.27,1.96l2.01,6.72l3.12,3.56l-0.2,1.54l-0.43,-2.11l-1.85,0.48l0.71,2.76l1.63,-0.88l-1.28,1l1.25,0.36l-0.46,11.66l-4,5.24l-6.03,3.19L253,64.29l2.07,2.87l3.05,-0.48l1.19,-1l-0.57,-0.1l12.9,-2.44l4.75,3.21l-1.91,2.24l1.3,4.98l-1.87,0.55l-0.41,1.8l-0.77,-0.11l0.92,3.45l-1.54,2.84l2.07,-2.19l1.2,0.43l-0.99,-0.57l0.55,-3.1l1.11,-0.59l-0.15,-1.35l2.17,-3.82l3.4,-0.45l1.04,-1.45l1.77,-0.47l4.68,1.28l5.28,3.73l7.59,2.84l6.6,6.44l5.49,-0.85l8.99,-7.58l5.59,0.22l-2.5,0.46l2.93,0.83l3.45,-1.03l0.55,-1.5l1.56,-0.74l-0.22,1.04l0.59,-0.59l0.85,0.7l-0.38,1.67l-3.15,2.97l0.16,-0.91l-1.38,0.04l0.29,0.94l0.66,-0.25l1.34,16.24l-8.99,6.24l-5.2,6l-3.19,-0.47l-0.7,-1.85l-1.17,3.45l-2.52,2.83l2.12,5.41l5.44,0.71l0.92,1.38l-0.16,2.16l1.36,0.26l0,0l-0.66,3.64l4.59,1.62l-3.45,1.03l-0.54,-0.96l0.61,-0.89l-2.03,-1.03l-2.29,2.96l-1.78,0.37l-0.99,1.91l-1.87,0.39l-1.46,2.29l1.56,6.33l-0.68,2.57l0,0l-0.27,1.83l0,0l2.98,1.51l0.42,1.87l2.45,1.99l4.63,0.29l-0.19,1.01l1.4,0.56l0.65,3.91l-1.46,2.07l-1.19,6.22l-3.84,0.72l-0.74,-1.26l-1.04,0.18l0.73,3.47l-1.23,2.32l0.67,0.76l-2.41,0.33l-1.96,2.93l-3.47,0.51l-0.61,2.4l-2.49,-0.57l-1.31,0.74l-1.09,7.63l-1.33,1.93l0,0l-0.98,0.46l-5.07,-1.49l-7.8,-5.34l-3,-0.1l-1.44,-0.92l0,0l1.13,-1.65l-2.15,-0.34l-3.28,-3.24l-1.9,-4.12l-1.52,0.93l-1.63,-1.11l-0.71,-5.44l3.07,-1.35l-0.5,-2.85l1.96,-2.29l-1.94,-0.51l0.5,-1.01l-0.9,-1.66l-2.63,-1.54l1.04,-1.35l-0.16,-1.46l1.6,-0.55l0.64,-1.56l0.09,-0.75l-1.62,-0.83l-3.03,2.71l-2.58,-0.75l-0.84,1.04l0.66,0.68l-0.82,2.83l-4.24,-0.34l-1.27,3.73l-4.62,-0.65l-1.02,3.15l-3.46,3.9l-2.31,-0.81l-0.2,-1.96l-1.54,-0.49l-0.09,-1.59l-2.61,8.04l0,0l-3.63,-0.89l-7.85,-5.57l-2.84,-8.25l-5.09,-4.77l-3.92,-8l-3.21,-4.36l-6.67,-2.83l-13.06,0.56l0,0l-0.99,-1.86l-2.09,-0.74l-3.19,-3.9l-1.47,-4.87l-1.33,-1.45l1.3,-1.06l-1.36,0.81l-1.74,-3.01l-1.8,-0.1l4.75,-2.33l2.64,0.53l-0.5,1.1l0.84,-0.01l0.03,-0.82l0.4,0.78l1.59,-0.4l1.7,-2.38l-0.06,-0.66l-1.61,-0.11l1.26,-0.59l-1.92,-2.33l0.77,-0.25l-0.87,-0.01l-1.2,-4.05l-2.03,-0.28l-2.28,1.55l0.24,-1.13l-0.39,1.15l-3.12,-5.67l2.05,-6.56l-0.11,-5.57l-0.82,-0.94L186,85.46l-2.47,-1.19l-2.24,0.33l-2.03,2.44l-2.1,-0.98l-2.72,-4l0.55,2.11l-1.32,-1.19l1.16,1.97L173,82.47l1.71,-5.06l0.91,-0.27l-0.43,1.16l1.68,0.73l0.85,-1.52l2.24,-0.45l-0.94,0.37l0.99,-1.98L179,76.02l-1.33,-0.58l-0.31,0.74l-2.74,-0.5l0.8,-2.11l12.95,-2.79l3.2,0.77l3.16,-2.16l2.5,-3.3l2.63,-0.58l0.37,-1.49l1.89,0.8l0.85,-0.71l-1.33,0.41l-1.7,-0.8l0.21,-2l-1.4,-2.4l-1.57,0.95l-1.83,4.58l-0.89,-0.28l0.53,0.36l-1.78,1.02l-3.35,-0.07l-2.45,-1.1l0.75,-1.72l-0.78,-1.37l4.37,-3.78l-0.26,-3.4l0.78,-3.11l0.67,-0.06l-1.44,-0.52l0.61,-1.33l-0.93,1.28l-3.29,0.05l-0.29,-0.75l2.96,-1.54l-0.96,0.24l-1.48,-4.09l-4.42,-2.97l-0.48,-3.33l-3.07,-1.56l-0.25,-0.73l1.16,-0.78l-0.81,-3.38l-5.64,-7.81l-0.43,-4.75l-5.55,0.15l-6.2,3.87l-2.35,-1.31l-0.83,-1.86l-1.53,-0.41l-0.35,1.7l-2.19,1.5l-0.11,12.12l-1.13,-1.11l1.04,-17.71l6.25,-15.67L162.36,0L163.97,0.73z'
		};

		fixture.detectChanges();

		const stateSH = debugElement.query(By.css('.land[id="1"]'));
		expect(stateSH.classes.active).toBeTruthy();
	});
});
