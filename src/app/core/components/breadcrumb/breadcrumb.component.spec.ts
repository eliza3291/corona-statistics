import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbComponent } from './breadcrumb.component';
import { of } from 'rxjs';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { By, Title } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('BreadcrumbComponent', () => {
	let component: BreadcrumbComponent;
	let fixture: ComponentFixture<BreadcrumbComponent>;
	let titleService: Title;
	let debugElement: DebugElement;

	const activatedRouteMock = {
		firstChild: null,
		outlet: PRIMARY_OUTLET,
		data: of({
			title: 'Overview'
		})
	};

	beforeEach(async () => {
		const mockRouter = {
			url: '/overview',
			events: of(new NavigationEnd(0, 'http://localhost:4200/overview', 'http://localhost:4200/overview')),
			navigate: jasmine.createSpy('navigate')
		};
		await TestBed.configureTestingModule({
			declarations: [BreadcrumbComponent],
			providers: [
				{ provide: ActivatedRoute, useValue: activatedRouteMock },
				{ provide: Router, useValue: mockRouter },
				{ provide: Title, useClass: Title }
			],
			imports: [RouterTestingModule]
		})
			.compileComponents()
			.then(() => {
				fixture = TestBed.createComponent(BreadcrumbComponent);
				titleService = TestBed.inject(Title);
				debugElement = fixture.debugElement;
				component = fixture.componentInstance;
			});
	});

	it('should be init', () => {
		expect(component).toBeTruthy();
	});

	it('pageInfo should contain title = Overview', () => {
		expect(component.pageInfo).toEqual(jasmine.objectContaining({ title: 'Overview' }));
	});

	it('page title should be overview', () => {
		expect(titleService.getTitle()).toBe('Overview');
	});

	it('should render breadcrumb', () => {
		fixture.detectChanges();
		const htmlElement = debugElement.query(By.css('.page-title')).nativeElement as HTMLElement;

		expect(htmlElement.textContent).toContain('Overview');
	});
});
