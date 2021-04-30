import { Component, ViewEncapsulation } from '@angular/core';

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
