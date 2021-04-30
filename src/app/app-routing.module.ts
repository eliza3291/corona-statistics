import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core';

const routes: Routes = [
	{
		path: '',
		component: CoreComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./germany-overview/germany-overview.module').then((m) => m.GermanyOverviewModule),
				pathMatch: 'full'
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
