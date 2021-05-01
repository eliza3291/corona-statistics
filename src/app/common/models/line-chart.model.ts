/** Array with LineChartSeries data. */
export class LineChart extends Array<LineChartSeries> {
	constructor() {
		super(0);
	}

	/** Initialize Linechart with values */
	static initializeLineChart(lineChartSeries: LineChartSeries[]): LineChart {
		const lineChart = new LineChart();
		lineChartSeries.forEach((element) => {
			lineChart.addSeries(element.name, element.series);
		});
		return lineChart;
	}

	/** Add series to specific data */
	addSeries(name: string, series: Serie[] = []): number {
		return this.push({ name, series });
	}

	/** Push a serie inside an already existing series array */
	addSerieToSeries(name: string, serie: Serie): LineChartSeries {
		let seriesIndex = this.findIndex((element) => (element.name = name));
		if (seriesIndex === -1) {
			seriesIndex = this.addSeries(name);
		}
		this[seriesIndex].series.push(serie);
		return this[seriesIndex];
	}

	/** Get the maximum length of timeseries */
	getMaxLength(): number {
		let max = 0;
		this.forEach((serie) => {
			if (serie.series.length > max) {
				max = serie.series.length;
			}
		});
		return max;
	}
}

/** Expected structure for every serie by the Ngx Charts library */
export interface Serie {
	name: string;
	value: number;
}

/** Expected structure for series by the Ngx Charts library  */
export interface LineChartSeries {
	name: string;
	series: Serie[];
}

/** Breakpoints to allow responsiveness  */
export interface BreakpointItem {
	width: number;
	nrItems: number;
}
