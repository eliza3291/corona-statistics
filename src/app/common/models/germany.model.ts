import { LineChart } from './line-chart.model';

/** Array with timeseries data. */
export class Timeseries extends Array<TimeseriesData> {
	constructor() {
		super(0);
	}

	/** Initialize Timeseries with values */
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

	/** Summary of total cases */
	get totalCases(): number {
		return this.reduce((a, b) => a + (b.cases || 0), 0);
	}

	/** Summary of total deaths */
	get totalDeaths(): number {
		return this.reduce((a, b) => a + (b.deaths || 0), 0);
	}

	/** Summary of total recovered */
	get totalRecovered(): number {
		return this.reduce((a, b) => a + (b.recovered || 0), 0);
	}

	/** Convert timeseries data to line chart */
	getChartSeries(name: string): LineChart {
		const lineChart = new LineChart();
		lineChart.addSeries(name);
		this.forEach((timeserie) => {
			const value = timeserie[name as keyof TimeseriesData] as number;
			lineChart.addSerieToSeries(name, { name: timeserie.date, value });
		});
		return lineChart;
	}

	/** Add a new serie */
	addSeries(data: TimeseriesData): number {
		return this.push(data);
	}
}

/** Data structure with date for timeseries */
export interface TimeseriesData extends Data {
	date: string;
}

/** Data structure to map the response */
export interface Data {
	cases: number;
	deaths: number;
	recovered: number;
}

/** Definition of timeseries for a state */
export class TimeseriesState {
	public idState: number;
	public data: Timeseries;

	constructor(id: number) {
		this.idState = id;
		this.data = new Timeseries();
	}

	/** Initialize TimeseriesState with values */
	static initializeClass(idState: number, data: TimeseriesData[]): TimeseriesState {
		const timeseriesState = new TimeseriesState(idState);
		data.forEach((element) => {
			timeseriesState.data.addSeries(element);
		});
		return timeseriesState;
	}
}
