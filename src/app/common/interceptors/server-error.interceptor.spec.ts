import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from '@environment';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { GermanyService } from '../services';
import { getDateBefore } from '../utils';

import { ServerErrorInterceptor } from './server-error.interceptor';
/**
 * Test Injector with GermanyService
 */
describe('ServerErrorInterceptor', () => {
  let injector: TestBed;
  let service: GermanyService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        GermanyService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ServerErrorInterceptor,
          multi: true
        }
      ]
    });

    injector = getTestBed();
    service = injector.inject(GermanyService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getTimeseriesGermany should retry when error 404', () => {
    const days = 1;
    service
      .getTimeseriesGermany(days)
      .pipe(
        catchError((error) => {
          // Pass error for test proposes
          return of(error);
        })
      )
      .subscribe((value) => {
        expect(value.status).toBe(404);
        expect(value).toBeTruthy();
      });

    const startDate = getDateBefore(days);

    const params = [
      `where=(NeuerFall IN(1,0) OR NeuerTodesfall IN(1,0,-9) OR NeuGenesen IN(1,0,-9)) AND MeldeDatum >= TIMESTAMP '${startDate}'`,
      'outStatistics=[{"statisticType":"sum","onStatisticField":"AnzahlFall","outStatisticFieldName":"cases"},{"statisticType":"sum","onStatisticField":"AnzahlTodesfall","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"AnzahlGenesen","outStatisticFieldName":"recovered"},{"statisticType":"max","onStatisticField":"MeldeDatum","outStatisticFieldName":"date"}]',
      'groupByFieldsForStatistics=MeldeDatum',
      'orderByFields=MeldeDatum',
      'f=json'
    ];

    const urlRequest = encodeURI(`${environment.arcgisCoronaGermany.url}?${params.join('&')}`);

    const retry = 1;
    let count = 0;

    while (count < retry + 1) {
      count++;
      const req = httpMock.expectOne(urlRequest);
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe(`${environment.arcgisCoronaGermany.url}`);
      req.flush('Not Found', { status: 404, statusText: 'Not Found' });
    }
  });

  it('getTimeseriesState retry when error 404', () => {
    const idState = 1;
    const days = 1;
    service
      .getTimeseriesState(idState, days)
      .pipe(
        catchError((error) => {
          // Pass error for test proposes
          return of(error);
        })
      )
      .subscribe((value) => {
        expect(value.status).toBe(404);
        expect(value).toBeTruthy();
      });

    const startDate = getDateBefore(days);

    const params = [
      `where=(NeuerFall IN(1,0) OR NeuerTodesfall IN(1,0,-9) OR NeuGenesen IN(1,0,-9)) AND MeldeDatum >= TIMESTAMP '${startDate}' AND IdBundesland = ${idState}`,
      'outStatistics=[{"statisticType":"sum","onStatisticField":"AnzahlFall","outStatisticFieldName":"cases"},{"statisticType":"sum","onStatisticField":"AnzahlTodesfall","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"AnzahlGenesen","outStatisticFieldName":"recovered"},{"statisticType":"max","onStatisticField":"MeldeDatum","outStatisticFieldName":"date"}]',
      'groupByFieldsForStatistics=IdBundesland,MeldeDatum,Bundesland',
      'orderByFields=IdBundesland,MeldeDatum',
      'f=json'
    ];

    const urlRequest = encodeURI(`${environment.arcgisCoronaStates.url}?${params.join('&')}`);

    const retry = 1;
    let count = 0;

    while (count < retry + 1) {
      count++;
      const req = httpMock.expectOne(urlRequest);
      expect(req.request.method).toBe('GET');
      expect(req.request.url).toBe(`${environment.arcgisCoronaGermany.url}`);
      req.flush('Not Found', { status: 404, statusText: 'Not Found' });
    }
  });
});
