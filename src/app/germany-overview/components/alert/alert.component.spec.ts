import { ChangeDetectionStrategy, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AlertType } from '@common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
	let component: AlertComponent;
	let fixture: ComponentFixture<AlertComponent>;
	let debugElement: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgbAlertModule],
			declarations: [AlertComponent]
		})
			.overrideComponent(AlertComponent, {
				set: { changeDetection: ChangeDetectionStrategy.Default }
			})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(AlertComponent);
				debugElement = fixture.debugElement;
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should not render ngb-alert', () => {
		const message = debugElement.queryAll(By.css('ngb-alert'));

		expect(message.length).toBe(0);
	});

	it(
		'should render message ERROR',
		waitForAsync(() => {
			component.message = { type: AlertType.DANGER, text: 'ERROR' };
			fixture.detectChanges();
			fixture
				.whenStable()
				.then(() => {
					const message = debugElement.query(By.css('ngb-alert')).nativeElement as HTMLElement;

					expect(message.textContent).toContain('ERROR');
					expect(message.classList).toContain('alert-danger');
					expect(message.classList).toContain('alert');
				})
				.catch(() => fail('Mandatory catch'));
		})
	);
});
