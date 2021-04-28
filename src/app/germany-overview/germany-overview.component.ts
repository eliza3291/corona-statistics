import { Component, OnInit } from '@angular/core';
import { LineChart, State, TIMEFRAME, Timeframe, Timeseries } from '@common';
import { GermanyService } from 'src/app/common/services';

@Component({
  templateUrl: './germany-overview.component.html',
  styleUrls: ['./germany-overview.component.scss']
})
export class GermanyOverviewComponent implements OnInit {
  /**
   * Selected timeframe
   */
  public timeframe: Timeframe;

  public totalCases: number;
  public totalDeaths: number;
  public totalRecovered: number;

  /**
   * Variables to set data for the line charts
   */
  public timeseriesCases: LineChart;
  public timeseriesDeaths: LineChart;
  public timeseriesRecovered: LineChart;

  public germanyTitle: string;
  public selectedState: State;

  constructor(private germanyService: GermanyService) {
    this.timeframe = TIMEFRAME[0];
    this.germanyTitle = 'Germany';
    this.selectedState = Object.create(null);

    this.totalCases = 0;
    this.totalDeaths = 0;
    this.totalRecovered = 0;
    this.timeseriesCases = new LineChart();
    this.timeseriesDeaths = new LineChart();
    this.timeseriesRecovered = new LineChart();
  }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Call service to get the data from Germany
   */
  getData(): void {
    this.germanyService.getTimeseriesGermany(this.timeframe.days).subscribe((response) => {
      this.setData(response);
    });
  }

  /**
   * Call service to get the data from every state
   */
  getDataState(idState: number): void {
    this.germanyService.getTimeseriesState(idState, this.timeframe.days).subscribe((response) => {
      this.setData(response.data);
    });
  }

  /**
   * Set data to be displayed in the template
   */
  setData(timeseries: Timeseries): void {
    this.totalCases = timeseries.getTotalCases();
    this.totalDeaths = timeseries.getTotalDeaths();
    this.totalRecovered = timeseries.getTotalRecovered();
    this.timeseriesCases = timeseries.getChartSeries('cases');
    this.timeseriesDeaths = timeseries.getChartSeries('deaths');
    this.timeseriesRecovered = timeseries.getChartSeries('recovered');
  }

  /**
   * Event triggered by the germany map component to indicate if a state is been selected and which one.
   * Update Data
   */
  onClickState(state: State): void {
    if (state.id && state.id !== this.selectedState.id) {
      this.getDataState(state.id);
    } else if (this.selectedState.id && !state.id) {
      this.getData();
    }
    this.selectedState = state;
  }

  /**
   * Event triggered by the timeframe selector component with the selected timeframe.
   * Update Data
   */
  onTimeframeSelected(timeframe: Timeframe): void {
    this.timeframe = timeframe;
    if (this.selectedState.id) {
      this.getDataState(this.selectedState.id);
    } else {
      this.getData();
    }
  }
}
