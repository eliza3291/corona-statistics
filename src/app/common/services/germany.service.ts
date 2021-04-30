import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timeseries, TimeseriesState } from '../models/germany.model';
import { environment } from '@environment';
import { getDateBefore } from '../utils';
import { map } from 'rxjs/operators';
import { Feature, QueryResponse } from '../models';

@Injectable()
export class GermanyService {
	constructor(private http: HttpClient) {}

	public getTimeseriesGermany(days: number): Observable<Timeseries> {
		const startDate = getDateBefore(days);

		const params: HttpParams = new HttpParams()
			.set(
				'where',
				`(NeuerFall IN(1,0) OR NeuerTodesfall IN(1,0,-9) OR NeuGenesen IN(1,0,-9)) AND MeldeDatum >= TIMESTAMP '${startDate}'`
			)
			.set(
				'outStatistics',
				'[{"statisticType":"sum","onStatisticField":"AnzahlFall","outStatisticFieldName":"cases"},{"statisticType":"sum","onStatisticField":"AnzahlTodesfall","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"AnzahlGenesen","outStatisticFieldName":"recovered"},{"statisticType":"max","onStatisticField":"MeldeDatum","outStatisticFieldName":"date"}]'
			)
			.set('groupByFieldsForStatistics', 'MeldeDatum')
			.set('orderByFields', 'MeldeDatum')
			.set('f', 'json');
		const requestUrl = environment.arcgisCoronaGermany.url;
		return this.http
			.get<QueryResponse>(requestUrl, { params })
			.pipe(
				map((response: QueryResponse) => {
					const mappedResponse: Timeseries = new Timeseries();
					if (response.error) {
						throw new HttpErrorResponse({
							url: `${requestUrl}?${params.toString()}`,
							status: response.error.code,
							statusText: response.error.message,
							error: response.error.details.toString()
						});
					}
					if (response.features && Array.isArray(response.features) && response.features.length > 0) {
						response.features.forEach((feature: Feature) => {
							mappedResponse.push({
								cases: feature.attributes.cases,
								deaths: feature.attributes.deaths,
								recovered: feature.attributes.recovered,
								date: new Date(feature.attributes.date).toLocaleDateString(undefined, {
									month: 'long',
									day: 'numeric'
								})
							});
						});
					} else {
						throw new HttpErrorResponse({
							url: `${requestUrl}?${params.toString()}`,
							status: 404,
							statusText: 'Not found'
						});
					}
					return mappedResponse;
				})
			);
	}

	public getTimeseriesState(idState: number, days: number): Observable<TimeseriesState> {
		const startDate = getDateBefore(days);

		const params: HttpParams = new HttpParams()
			.set(
				'where',
				`(NeuerFall IN(1,0) OR NeuerTodesfall IN(1,0,-9) OR NeuGenesen IN(1,0,-9)) AND MeldeDatum >= TIMESTAMP '${startDate}' AND IdBundesland = ${idState}`
			)
			.set(
				'outStatistics',
				'[{"statisticType":"sum","onStatisticField":"AnzahlFall","outStatisticFieldName":"cases"},{"statisticType":"sum","onStatisticField":"AnzahlTodesfall","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"AnzahlGenesen","outStatisticFieldName":"recovered"},{"statisticType":"max","onStatisticField":"MeldeDatum","outStatisticFieldName":"date"}]'
			)
			.set('groupByFieldsForStatistics', 'IdBundesland,MeldeDatum,Bundesland')
			.set('orderByFields', 'IdBundesland,MeldeDatum')
			.set('f', 'json');
		const requestUrl = environment.arcgisCoronaStates.url;
		return this.http
			.get<QueryResponse>(requestUrl, { params })
			.pipe(
				map((response: QueryResponse) => {
					const mappedResponse: TimeseriesState = new TimeseriesState(idState);
					if (response.error) {
						throw new HttpErrorResponse({
							url: `${requestUrl}?${params.toString()}`,
							status: response.error.code,
							statusText: response.error.message,
							error: response.error.details.toString()
						});
					}
					if (response.features && Array.isArray(response.features) && response.features.length > 0) {
						response.features.forEach((feature: Feature) => {
							mappedResponse.data.push({
								cases: feature.attributes.cases,
								deaths: feature.attributes.deaths,
								recovered: feature.attributes.recovered,
								date: new Date(feature.attributes.date).toLocaleDateString(undefined, {
									month: 'long',
									day: 'numeric'
								})
							});
						});
					} else {
						throw new HttpErrorResponse({
							url: `${requestUrl}?${params.toString()}`,
							status: 404,
							statusText: 'Not found'
						});
					}
					return mappedResponse;
				})
			);
	}
}
