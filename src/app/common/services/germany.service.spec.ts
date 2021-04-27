import { TestBed, getTestBed } from '@angular/core/testing';

import { GermanyService } from './germany.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MAPPED_GERMANY_RESPONSE, MAPPED_STATE_RESPONSE, RESPONSE_GERMANY_DATA, RESPONSE_STATE_DATA } from '../mocks';
import { environment } from '@environment';
import { getDateBefore } from '../utils';

describe('GermanyService', () => {
  let injector: TestBed;
  let service: GermanyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GermanyService]
    });

    injector = getTestBed();
    service = injector.inject(GermanyService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getTimeseriesGermany should return value from observable', () => {
    service.getTimeseriesGermany(7).subscribe((value) => {
      expect(value.length).toBe(8);
      expect(value).toEqual(MAPPED_GERMANY_RESPONSE);
    });
    const startDate = getDateBefore(7);

    const params = [
      `where=(NeuerFall IN(1,0) OR NeuerTodesfall IN(1,0,-9) OR NeuGenesen IN(1,0,-9)) AND MeldeDatum >= TIMESTAMP '${startDate}'`,
      'outStatistics=[{"statisticType":"sum","onStatisticField":"AnzahlFall","outStatisticFieldName":"cases"},{"statisticType":"sum","onStatisticField":"AnzahlTodesfall","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"AnzahlGenesen","outStatisticFieldName":"recovered"},{"statisticType":"max","onStatisticField":"MeldeDatum","outStatisticFieldName":"date"}]',
      'groupByFieldsForStatistics=MeldeDatum',
      'orderByFields=MeldeDatum',
      'f=json'
    ];

    const urlRequest = encodeURI(`${environment.arcgisCoronaGermany.url}?${params.join('&')}`);

    const req = httpMock.expectOne(urlRequest);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${environment.arcgisCoronaGermany.url}`);
    req.flush(RESPONSE_GERMANY_DATA);
  });

  it('getTimeseriesState should return data of state with 1 from a promise', () => {
    const idState = 1;
    const days = 7;
    service.getTimeseriesState(idState, days).subscribe((value) => {
      expect(value.idState).toBe(1);
      expect(value.data).toBeTruthy();
      expect(value.data.length).toBe(8);
      expect(value).toEqual(MAPPED_STATE_RESPONSE);
    });

    const startDate = getDateBefore(7);

    const params = [
      `where=(NeuerFall IN(1,0) OR NeuerTodesfall IN(1,0,-9) OR NeuGenesen IN(1,0,-9)) AND MeldeDatum >= TIMESTAMP '${startDate}' AND IdBundesland = ${idState}`,
      'outStatistics=[{"statisticType":"sum","onStatisticField":"AnzahlFall","outStatisticFieldName":"cases"},{"statisticType":"sum","onStatisticField":"AnzahlTodesfall","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"AnzahlGenesen","outStatisticFieldName":"recovered"},{"statisticType":"max","onStatisticField":"MeldeDatum","outStatisticFieldName":"date"}]',
      'groupByFieldsForStatistics=IdBundesland,MeldeDatum,Bundesland',
      'orderByFields=IdBundesland,MeldeDatum',
      'f=json'
    ];

    const urlRequest = encodeURI(`${environment.arcgisCoronaStates.url}?${params.join('&')}`);

    const req = httpMock.expectOne(urlRequest);
    expect(req.request.method).toBe('GET');
    expect(req.request.url).toBe(`${environment.arcgisCoronaStates.url}`);
    req.flush(RESPONSE_STATE_DATA);
  });
});
