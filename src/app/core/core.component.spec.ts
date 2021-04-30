import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbComponent } from './components';

import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
	let component: CoreComponent;
	let fixture: ComponentFixture<CoreComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CoreComponent, BreadcrumbComponent],
			imports: [RouterTestingModule]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(CoreComponent);
				component = fixture.componentInstance;
				fixture.detectChanges();
			});
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
