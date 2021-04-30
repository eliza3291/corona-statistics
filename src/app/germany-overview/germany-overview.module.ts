import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GermanyOverviewComponent } from './germany-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { GermanyService } from 'src/app/common/services';
import { HttpClientModule } from '@angular/common/http';
import { GermanyMapComponent, TimeframeSelectorComponent, LineChartComponent, AlertComponent } from './components';
import { LineChartModule } from '@swimlane/ngx-charts';
import { ResponsiveWidthModule } from '@common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
	{
		path: '',
		component: GermanyOverviewComponent,
		data: {
			title: 'Germany Overview'
		}
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		HttpClientModule,
		LineChartModule,
		ResponsiveWidthModule,
		NgbAlertModule
	],
	declarations: [
		GermanyOverviewComponent,
		GermanyMapComponent,
		TimeframeSelectorComponent,
		LineChartComponent,
		AlertComponent
	],
	providers: [GermanyService]
})
export class GermanyOverviewModule {}
