import { Component } from '@angular/core';
import { State, TIMEFRAME, Timeframe } from '@common';
import { GermanyService } from 'src/app/common/services';

@Component({
  templateUrl: './germany-overview.component.html',
  styleUrls: ['./germany-overview.component.scss']
})
export class GermanyOverviewComponent {
  public timeframe: number;

  public totalCases: number;
  public totalDeaths: number;
  public totalRecovered: number;
  public germanyTitle: string;
  public selectedState: State;

  constructor(private germanyService: GermanyService) {
    this.timeframe = TIMEFRAME[0].days;
    this.germanyTitle = 'Germany';
    this.selectedState = Object.create(null);
    this.totalCases = 0;
    this.totalDeaths = 0;
    this.totalRecovered = 0;
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.germanyService.getTimeseriesGermany(this.timeframe).subscribe((response) => {
      this.totalCases = response.getTotalCases();
      this.totalDeaths = response.getTotalDeaths();
      this.totalRecovered = response.getTotalRecovered();
    });
  }

  getDataState(idState: number) {
    this.germanyService.getTimeseriesState(idState, this.timeframe).subscribe((response) => {
      this.totalCases = response.data.getTotalCases();
      this.totalDeaths = response.data.getTotalDeaths();
      this.totalRecovered = response.data.getTotalRecovered();
    });
  }

  onClick(state: State) {
    console.log(state.id, this.selectedState.id, state.id != this.selectedState.id);
    if (state.id && state.id != this.selectedState.id) {
      this.getDataState(state.id);
    } else if (this.selectedState.id && !state.id) {
      this.getData();
    }
    this.selectedState = state;
  }

  onTimeframeSelected(timeframe: Timeframe): void {
    this.timeframe = timeframe.days;
    if (this.selectedState.id) {
      this.getDataState(this.selectedState.id);
    } else {
      this.getData();
    }
  }
}
