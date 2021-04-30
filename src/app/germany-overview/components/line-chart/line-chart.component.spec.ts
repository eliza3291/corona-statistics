import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LINECHART_MOCK } from '@common';
import { LineChartModule } from '@swimlane/ngx-charts';
import { ResponsiveWidthModule } from '@common';
import { LineChartComponent } from './line-chart.component';
import { By } from '@angular/platform-browser';

describe('LineChartComponent', () => {
	let component: LineChartComponent;
	let fixture: ComponentFixture<LineChartComponent>;
	let debugElement: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LineChartComponent],
			imports: [LineChartModule, BrowserAnimationsModule, ResponsiveWidthModule]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(LineChartComponent);
				debugElement = fixture.debugElement;
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('not show ngx-charts-line-chart when results lenght == 0', () => {
		const chart = debugElement.queryAll(By.css('ngx-charts-line-charts'));

		expect(chart.length).toBe(0);
	});

	it(
		'show ngx-charts-line-chart when results lenght > 0',
		waitForAsync(() => {
			let chart: DebugElement[];
			component.results = LINECHART_MOCK;
			fixture.detectChanges();
			fixture
				.whenStable()
				.then(() => {
					chart = debugElement.queryAll(By.css('ngx-charts-line-charts'));

					expect(chart).toBeTruthy();
				})
				.catch(() => fail('Mandatory catch'));
		})
	);

	it('calculate the right viewWidth when Mock length = 28 and innerWidth = 630', () => {
		component.results = LINECHART_MOCK;
		fixture.detectChanges();
		// Overwrite innerWidth with new property
		(window as any).innerWidth = 630;
		window.dispatchEvent(new Event('resize'));

		expect(component.viewWidth).toBe(980);
	});

	it('test yAxisFormatting: when value = 0.8 return ""', () => {
		expect(component.yAxisTickFormatting(0.8)).toBe('');
	});
});
