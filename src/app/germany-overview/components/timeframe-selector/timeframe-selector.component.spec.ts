import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimeframeSelectorComponent } from './timeframe-selector.component';

describe('TimeframeSelectorComponent', () => {
	let component: TimeframeSelectorComponent;
	let fixture: ComponentFixture<TimeframeSelectorComponent>;
	let debugElement: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TimeframeSelectorComponent]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(TimeframeSelectorComponent);
				debugElement = fixture.debugElement;
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should render last week', () => {
		const title = debugElement.query(By.css('span.h4')).nativeElement as HTMLElement;

		expect(title.textContent).toContain('Last Week');
	});

	it('should set invisible in back button wehn selected index = 0', () => {
		component.selectedTimeframeIndex = 0;
		fixture.detectChanges();
		const buttons = debugElement.queryAll(By.css('button'));
		const backButton = buttons[0].nativeElement as HTMLElement;

		expect(backButton.classList).toContain('invisible');
	});

	it('should remove invisible in back button when selected index > 0', () => {
		component.selectedTimeframeIndex = 1;
		fixture.detectChanges();
		const buttons = debugElement.queryAll(By.css('button'));
		const backButton = buttons[0].nativeElement as HTMLElement;

		expect(backButton.classList).not.toContain('invisible');
	});

	it('should set invisible in next button when selected index == timeframeData length-1', () => {
		component.selectedTimeframeIndex = component.timeframeData.length - 1;
		fixture.detectChanges();
		const buttons = debugElement.queryAll(By.css('button'));
		const nextButton = buttons[1].nativeElement as HTMLElement;

		expect(nextButton.classList).toContain('invisible');
	});

	it('should remove invisible in next button when selected index !== timeframeData length-1', () => {
		component.selectedTimeframeIndex = 1;
		fixture.detectChanges();
		const buttons = debugElement.queryAll(By.css('button'));
		const nextButton = buttons[1].nativeElement as HTMLElement;

		expect(nextButton.classList).not.toContain('invisible');
	});

	it('should render name when selectedTimeframeIndex changes', () => {
		component.selectedTimeframeIndex = 1;
		fixture.detectChanges();
		const title = debugElement.query(By.css('span.h4')).nativeElement as HTMLElement;

		expect(title.textContent).toContain(component.timeframeData[1].name);
	});

	it('click back button should set selectedTimeframeIndex - 1', () => {
		component.selectedTimeframeIndex = 2;
		const buttons = debugElement.queryAll(By.css('button'));
		const backButton = buttons[0].nativeElement as HTMLElement;
		backButton.dispatchEvent(new MouseEvent('click'));
		fixture.detectChanges();

		expect(component.selectedTimeframeIndex).toBe(1);
	});

	it('click next button should set selectedTimeframeIndex + 1', () => {
		component.selectedTimeframeIndex = 2;
		const buttons = debugElement.queryAll(By.css('button'));
		const nextButton = buttons[1].nativeElement as HTMLElement;
		nextButton.dispatchEvent(new MouseEvent('click'));
		fixture.detectChanges();

		expect(component.selectedTimeframeIndex).toBe(3);
	});
});
