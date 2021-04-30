import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	GermanyService,
	MAPPED_GERMANY_RESPONSE,
	MAPPED_STATE_RESPONSE,
	ResponsiveWidthModule,
	Timeseries,
	TimeseriesState
} from '@common';
import { LineChartModule } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { AlertComponent, GermanyMapComponent, LineChartComponent, TimeframeSelectorComponent } from './components';

import { GermanyOverviewComponent } from './germany-overview.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

export class GermanyServiceMock {
	getTimeseriesGermany(): Observable<Timeseries> {
		return of(MAPPED_GERMANY_RESPONSE);
	}

	getTimeseriesState(): Observable<TimeseriesState> {
		return of(MAPPED_STATE_RESPONSE);
	}
}

describe('OverviewComponent', () => {
	let component: GermanyOverviewComponent;
	let fixture: ComponentFixture<GermanyOverviewComponent>;
	let debugElement: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				GermanyOverviewComponent,
				TimeframeSelectorComponent,
				GermanyMapComponent,
				LineChartComponent,
				AlertComponent
			],
			providers: [
				{
					provide: GermanyService,
					useClass: GermanyServiceMock
				}
			],
			imports: [BrowserAnimationsModule, LineChartModule, ResponsiveWidthModule, NgbAlertModule]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(GermanyOverviewComponent);
				debugElement = fixture.debugElement;
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render title Germany in first h1', () => {
		const titles = debugElement.queryAll(By.css('h1'));
		const firstTitle = titles[0].nativeElement as HTMLElement;

		expect(titles.length).toBeTruthy();
		expect(titles.length).toBeGreaterThan(0);
		expect(firstTitle.textContent).toContain('Germany');
	});

	it('should render app-timeframe-selector', () => {
		const timeframe = debugElement.query(By.css('app-timeframe-selector')).nativeElement as HTMLElement;

		expect(timeframe).toBeTruthy();
	});

	it('should render app-germany-map', () => {
		const map = debugElement.query(By.css('app-germany-map')).nativeElement as HTMLElement;

		expect(map).toBeTruthy();
	});

	it('should render 3 app-line-chart', () => {
		const lineCharts = debugElement.queryAll(By.css('app-line-chart'));

		expect(lineCharts.length).toBeTruthy();
		expect(lineCharts.length).toBe(3);
	});

	it('should render total cases = 151305', () => {
		const cases = debugElement.query(By.css('.fas.fa-viruses')).nativeElement as HTMLElement;

		expect(cases.nextSibling?.textContent).toContain('151305');
	});

	it('should render total deaths = 167', () => {
		const deaths = debugElement.query(By.css('.fas.fa-cross')).nativeElement as HTMLElement;

		expect(deaths.nextSibling?.textContent).toContain('167');
	});

	it('should render total recovered = 3888', () => {
		const recovered = debugElement.query(By.css('.fas.fa-hand-holding-heart')).nativeElement as HTMLElement;

		expect(recovered.nextSibling?.textContent).toContain('3888');
	});

	it('listens for state selected', () => {
		const states = debugElement.query(By.css('.land[id="1"]')).nativeElement as HTMLElement;

		expect(states).toBeTruthy();

		/**
		 * Select state 1 and validate that values rendered.
		 */
		states.dispatchEvent(new MouseEvent('click'));

		fixture.detectChanges();
		const titles = debugElement.queryAll(By.css('h1'));
		const firstTitle = titles[0].nativeElement as HTMLElement;

		expect(titles.length).toBeTruthy();
		expect(titles.length).toBeGreaterThan(0);
		/**
		 * Title should be valid
		 * Title should change from Germany to Schleswig-Holstein.
		 */
		expect(firstTitle.textContent).toContain(component.selectedState.title);
		/**
		 * Check cases, deaths, recovered.
		 */
		const cases = debugElement.query(By.css('.fas.fa-viruses')).nativeElement as HTMLElement;

		expect(cases.nextSibling?.textContent).toContain('3315');

		const deaths = debugElement.query(By.css('.fas.fa-cross')).nativeElement as HTMLElement;

		expect(deaths.nextSibling?.textContent).toContain('5');

		const recovered = debugElement.query(By.css('.fas.fa-hand-holding-heart')).nativeElement as HTMLElement;

		expect(recovered.nextSibling?.textContent).toContain('117');
	});
});
