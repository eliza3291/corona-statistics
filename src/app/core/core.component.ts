import { Component, ViewEncapsulation } from '@angular/core';

/**
 * Component with the layout of the webapp
 * Header, footer, breadcrumbs and components that will be always shown
 * should be part of the core module and childs of this component.
 */
@Component({
	selector: 'app-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CoreComponent {
	options = {
		theme: 'light',
		dir: 'ltr',
		layout: 'vertical',
		sidebartype: 'full',
		sidebarpos: 'fixed',
		headerpos: 'fixed',
		boxed: 'full',
		navbarbg: 'skin5',
		sidebarbg: 'skin4',
		logobg: 'skin4'
	};
}
