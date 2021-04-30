export class LineChart extends Array<LineChartSeries> {
	constructor() {
		super(0);
	}

	static initializeLineChart(lineChartSeries: LineChartSeries[]): LineChart {
		const lineChart = new LineChart();
		lineChartSeries.forEach((element) => {
			lineChart.addSeries(element.name, element.series);
		});
		return lineChart;
	}

	addSeries(name: string, series: Serie[] = []): number {
		return this.push({ name, series });
	}

	addSerieToSeries(name: string, serie: Serie): LineChartSeries {
		let seriesIndex = this.findIndex((element) => (element.name = name));
		if (seriesIndex === -1) {
			seriesIndex = this.addSeries(name);
		}
		this[seriesIndex].series.push(serie);
		return this[seriesIndex];
	}

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

export interface Serie {
	name: string;
	value: number;
}

export interface LineChartSeries {
	name: string;
	series: Serie[];
}

export interface BreakpointItem {
	width: number;
	nrItems: number;
}
