import { Component, HostListener, Input } from '@angular/core';
import { LineChart } from '@common';
import { DEFAULT_ITEM_WIDTH, ITEMS_PER_BREAKPOINT } from 'src/app/common/data/line-chart.data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @Input() set lineChartData(data: LineChart) {
    this.results = data;
    this.setViewWidth();
  }

  /**
   * Chart options
   */
  public results: LineChart;
  public viewWidth: number;
  public scheme: string;
  public xAxis: boolean;
  public yAxis: boolean;

  constructor() {
    /**
     * Initialize chart options
     */
    this.results = new LineChart();
    this.viewWidth = 0;
    this.scheme = 'picnic';
    this.xAxis = true;
    this.yAxis = true;
  }

  /**
   * Update width of chart container when the window is resized
   */
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setViewWidth();
  }

  /**
   * Calculate width of chart container taking in account the default item width and the breakdowns.
   */
  setViewWidth(): void {
    const innerWidth = window.innerWidth;
    const maxLength = this.results.getMaxLength() - 1;

    ITEMS_PER_BREAKPOINT.some((element) => {
      if (innerWidth < element.width) {
        this.viewWidth = maxLength > element.nrItems ? DEFAULT_ITEM_WIDTH * maxLength : 0;
        return true;
      }
      this.viewWidth = 0;
      return false;
    });
  }

  /**
   * The unit of the values inside the chart is persons, so 0.8 persons is not an accurate value.
   * Acurrate value should be: 0 persons, 1 person, or N persons.
   */
  yAxisTickFormatting(val: number): string {
    if (val % 1 === 0) {
      return val.toLocaleString();
    } else {
      return '';
    }
  }
}
