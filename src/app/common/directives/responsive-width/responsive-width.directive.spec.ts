import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LineChartComponent } from 'src/app/shared/line-chart/line-chart.component';
import { ResponsiveWidthDirective } from './responsive-width.directive';
import { By } from '@angular/platform-browser';

describe('ResponsiveWidthDirective', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [LineChartComponent, ResponsiveWidthDirective]
    }).createComponent(LineChartComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have one div with the directive', () => {
    const div = fixture.debugElement.queryAll(By.directive(ResponsiveWidthDirective));
    expect(div.length).toBe(1);
  });

  it('should change div width to 500px', () => {
    component.viewWidth = 500;
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.directive(ResponsiveWidthDirective));

    expect(div.nativeElement.style.width).toBe('500px');
  });

  it('should set unset value to width when 0', () => {
    component.viewWidth = 0;
    fixture.detectChanges();

    const div = fixture.debugElement.query(By.directive(ResponsiveWidthDirective));

    expect(div.nativeElement.style.width).toBe('unset');
  });
});
