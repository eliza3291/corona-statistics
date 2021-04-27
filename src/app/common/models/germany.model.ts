import { LineChart, LineChartSeries } from './line-chart.model';

export class Timeseries extends Array<TimeseriesData> {
  constructor() {
    super(0);
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
}

export interface TimeseriesData {
  cases: number;
  deaths: number;
  recovered: number;
  date: string;
}

export class TimeseriesState {
  public idState: number;
  public data: Timeseries;

  constructor(id: number) {
    this.idState = id;
    this.data = new Timeseries();
  }
}
