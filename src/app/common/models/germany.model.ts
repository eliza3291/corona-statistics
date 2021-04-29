import { LineChart } from './line-chart.model';

export class Timeseries extends Array<TimeseriesData> {
  constructor() {
    super(0);
  }

  static initializeClass(timeseriesData: TimeseriesData[]): Timeseries {
    const timeseries = new Timeseries();
    timeseriesData.forEach((element) => {
      timeseries.addSeries({
        cases: element.cases,
        deaths: element.deaths,
        recovered: element.recovered,
        date: element.date
      });
    });
    return timeseries;
  }

  getTotalCases(): number {
    return this.reduce((a, b) => a + (b.cases || 0), 0);
  }

  getTotalDeaths(): number {
    return this.reduce((a, b) => a + (b.deaths || 0), 0);
  }

  getTotalRecovered(): number {
    return this.reduce((a, b) => a + (b.recovered || 0), 0);
  }

  getChartSeries(name: string): LineChart {
    const lineChart = new LineChart();
    lineChart.addSeries(name);
    this.forEach((timeserie) => {
      const value = timeserie[name as keyof TimeseriesData] as number;
      lineChart.addSerieToSeries(name, { name: timeserie.date, value });
    });
    return lineChart;
  }

  addSeries(data: TimeseriesData): number {
    return this.push(data);
  }
}

export interface TimeseriesData extends Data {
  date: string;
}

export interface Data {
  cases: number;
  deaths: number;
  recovered: number;
}

export class TimeseriesState {
  public idState: number;
  public data: Timeseries;

  constructor(id: number) {
    this.idState = id;
    this.data = new Timeseries();
  }

  static initializeClass(idState: number, data: TimeseriesData[]): TimeseriesState {
    const timeseriesState = new TimeseriesState(idState);
    data.forEach((element) => {
      timeseriesState.data.addSeries(element);
    });
    return timeseriesState;
  }
}
