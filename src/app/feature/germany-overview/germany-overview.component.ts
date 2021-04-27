import { Component, OnInit } from '@angular/core';
import { LineChart, State, TIMEFRAME, Timeframe, Timeseries } from '@common';
import { GermanyService } from 'src/app/common/services';

@Component({
  templateUrl: './germany-overview.component.html',
  styleUrls: ['./germany-overview.component.scss']
})
export class GermanyOverviewComponent implements OnInit {
  public timeframe: Timeframe;

  public totalCases: number;
  public totalDeaths: number;
  public totalRecovered: number;

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

  getData(): void {
    this.germanyService.getTimeseriesGermany(this.timeframe.days).subscribe((response) => {
      this.setData(response);
    });
  }

  getDataState(idState: number): void {
    this.germanyService.getTimeseriesState(idState, this.timeframe.days).subscribe((response) => {
      this.setData(response.data);
    });
  }

  setData(timeseries: Timeseries): void {
    this.totalCases = timeseries.getTotalCases();
    this.totalDeaths = timeseries.getTotalDeaths();
    this.totalRecovered = timeseries.getTotalRecovered();
    this.timeseriesCases = timeseries.getChartSeries('cases');
    this.timeseriesDeaths = timeseries.getChartSeries('deaths');
    this.timeseriesRecovered = timeseries.getChartSeries('recovered');
  }

  onClick(state: State): void {
    if (state.id && state.id !== this.selectedState.id) {
      this.getDataState(state.id);
    } else if (this.selectedState.id && !state.id) {
      this.getData();
    }
    this.selectedState = state;
  }

  onTimeframeSelected(timeframe: Timeframe): void {
    this.timeframe = timeframe;
    if (this.selectedState.id) {
      this.getDataState(this.selectedState.id);
    } else {
      this.getData();
    }
  }
}
