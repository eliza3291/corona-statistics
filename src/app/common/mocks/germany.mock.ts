import { Timeseries, TimeseriesState } from '../models';

/** Example of a mapped response from the endpoint with the data of Germany */
export const MAPPED_GERMANY_RESPONSE: Timeseries = Timeseries.initializeClass([
	{
		cases: 7638,
		deaths: 8,
		recovered: 51,
		date: 'April 26'
	},
	{
		cases: 8388,
		deaths: 5,
		recovered: 56,
		date: 'April 25'
	},
	{
		cases: 17562,
		deaths: 8,
		recovered: 156,
		date: 'April 24'
	},
	{
		cases: 22651,
		deaths: 17,
		recovered: 286,
		date: 'April 23'
	},
	{
		cases: 25287,
		deaths: 21,
		recovered: 396,
		date: 'April 22'
	},
	{
		cases: 29453,
		deaths: 29,
		recovered: 820,
		date: 'April 21'
	},
	{
		cases: 27983,
		deaths: 44,
		recovered: 1146,
		date: 'April 20'
	},
	{
		cases: 12343,
		deaths: 35,
		recovered: 977,
		date: 'April 19'
	}
]);
/** Example of a mapped response from the endpoint with the data of the state with id 1*/
export const MAPPED_STATE_RESPONSE: TimeseriesState = TimeseriesState.initializeClass(1, [
	{
		cases: 104,
		deaths: 0,
		recovered: 1,
		date: 'April 26'
	},
	{
		cases: 207,
		deaths: 0,
		recovered: 2,
		date: 'April 25'
	},
	{
		cases: 381,
		deaths: 1,
		recovered: 4,
		date: 'April 24'
	},
	{
		cases: 491,
		deaths: 0,
		recovered: 5,
		date: 'April 23'
	},
	{
		cases: 519,
		deaths: 0,
		recovered: 13,
		date: 'April 22'
	},
	{
		cases: 817,
		deaths: 1,
		recovered: 39,
		date: 'April 21'
	},
	{
		cases: 536,
		deaths: 0,
		recovered: 29,
		date: 'April 20'
	},
	{
		cases: 260,
		deaths: 3,
		recovered: 24,
		date: 'April 19'
	}
]);
