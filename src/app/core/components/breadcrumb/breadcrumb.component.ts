import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

/** Show current location of a user inside the webapp */
@Component({
	selector: 'app-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent {
	pageInfo: Data;
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
		this.pageInfo = Object.create({}) as Data;
		this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.pipe(map(() => this.activatedRoute))
			.pipe(
				map((route) => {
					while (route.firstChild) {
						route = route.firstChild;
					}
					return route;
				})
			)
			.pipe(filter((route) => route.outlet === 'primary'))
			.pipe(mergeMap((route) => route.data))
			.subscribe((event: Data) => {
				this.titleService.setTitle(event.title);
				this.pageInfo = event;
			});
	}
}
