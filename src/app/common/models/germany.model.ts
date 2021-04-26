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
