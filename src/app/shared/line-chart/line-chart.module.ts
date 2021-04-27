import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LineChartComponent } from './line-chart.component';
import { LineChartModule as NgxChartsLineChartModule } from '@swimlane/ngx-charts';
import { ResponsiveWidthModule } from '@common';

@NgModule({
  imports: [CommonModule, NgxChartsLineChartModule, ResponsiveWidthModule],
  declarations: [LineChartComponent],
  exports: [LineChartComponent]
})
export class LineChartModule {}
