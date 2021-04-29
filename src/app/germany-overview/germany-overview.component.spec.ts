import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  GermanyService,
  MAPPED_GERMANY_RESPONSE,
  MAPPED_STATE_RESPONSE,
  ResponsiveWidthModule,
  Timeseries,
  TimeseriesState
} from '@common';
import { LineChartModule } from '@swimlane/ngx-charts';
import { Observable, of } from 'rxjs';
import { GermanyMapComponent, LineChartComponent, TimeframeSelectorComponent } from './components';

import { GermanyOverviewComponent } from './germany-overview.component';

export class GermanyServiceMock {
  getTimeseriesGermany(): Observable<Timeseries> {
    return of(MAPPED_GERMANY_RESPONSE);
  }

  getTimeseriesState(): Observable<TimeseriesState> {
    return of(MAPPED_STATE_RESPONSE);
  }
}

describe('OverviewComponent', () => {
  let component: GermanyOverviewComponent;
  let fixture: ComponentFixture<GermanyOverviewComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GermanyOverviewComponent, TimeframeSelectorComponent, GermanyMapComponent, LineChartComponent],
      providers: [
        {
          provide: GermanyService,
          useClass: GermanyServiceMock
        }
      ],
      imports: [BrowserAnimationsModule, LineChartModule, ResponsiveWidthModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(GermanyOverviewComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title Germany in first h1', () => {
    const title = debugElement.nativeElement.querySelectorAll('h1');
    expect(title.length).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    expect(title[0].textContent).toContain('Germany');
  });

  it('should render app-timeframe-selector', () => {
    const timeframe = debugElement.nativeElement.querySelector('app-timeframe-selector');
    expect(timeframe).toBeTruthy();
  });

  it('should render app-germany-map', () => {
    const map = debugElement.nativeElement.querySelector('app-germany-map');
    expect(map).toBeTruthy();
  });

  it('should render 3 app-line-chart', () => {
    const lineCharts = debugElement.nativeElement.querySelectorAll('app-line-chart');
    expect(lineCharts.length).toBeTruthy();
    expect(lineCharts.length).toBe(3);
  });

  it('should render total cases = 151305', () => {
    const cases = debugElement.nativeElement.querySelector('.fas.fa-viruses');
    expect(cases.nextSibling.textContent).toContain('151305');
  });

  it('should render total deaths = 167', () => {
    const deaths = debugElement.nativeElement.querySelector('.fas.fa-cross');
    expect(deaths.nextSibling.textContent).toContain('167');
  });

  it('should render total recovered = 3888', () => {
    const recovered = debugElement.nativeElement.querySelector('.fas.fa-hand-holding-heart');
    expect(recovered.nextSibling.textContent).toContain('3888');
  });

  it('listens for state selected', () => {
    const states = debugElement.query(By.css('.land[id="1"]'));
    expect(states).toBeTruthy();

    /**
     * Select state 1 and validate that values rendered.
     */
    states.nativeElement.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();
    const title = debugElement.nativeElement.querySelectorAll('h1');
    expect(title.length).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
    /**
     * Title should be valid
     * Title should change from Germany to Schleswig-Holstein.
     */
    expect(title[0].textContent).toContain(component.selectedState.title);
    /**
     * Check cases, deaths, recovered.
     */
    const cases = debugElement.nativeElement.querySelector('.fas.fa-viruses');
    expect(cases.nextSibling.textContent).toContain('3315');

    const deaths = debugElement.nativeElement.querySelector('.fas.fa-cross');
    expect(deaths.nextSibling.textContent).toContain('5');

    const recovered = debugElement.nativeElement.querySelector('.fas.fa-hand-holding-heart');
    expect(recovered.nextSibling.textContent).toContain('117');
  });
});
