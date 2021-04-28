import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeframeSelectorComponent } from './timeframe-selector.component';

describe('TimeframeSelectorComponent', () => {
  let component: TimeframeSelectorComponent;
  let fixture: ComponentFixture<TimeframeSelectorComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeframeSelectorComponent]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TimeframeSelectorComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render last week', () => {
    const title = debugElement.nativeElement.querySelector('span.h4');
    expect(title.textContent).toContain('Last Week');
  });

  it('should set invisible in back button wehn selected index = 0', () => {
    component.selectedTimeframeIndex = 0;
    fixture.detectChanges();
    const buttons = debugElement.nativeElement.querySelectorAll('button');
    expect(buttons[0].classList).toContain('invisible');
  });

  it('should remove invisible in back button when selected index > 0', () => {
    component.selectedTimeframeIndex = 1;
    fixture.detectChanges();
    const buttons = debugElement.nativeElement.querySelectorAll('button');
    expect(buttons[0].classList).not.toContain('invisible');
  });

  it('should set invisible in next button when selected index == timeframeData length-1', () => {
    component.selectedTimeframeIndex = component.timeframeData.length - 1;
    fixture.detectChanges();
    const buttons = debugElement.nativeElement.querySelectorAll('button');
    expect(buttons[1].classList).toContain('invisible');
  });

  it('should remove invisible in next button when selected index !== timeframeData length-1', () => {
    component.selectedTimeframeIndex = 1;
    fixture.detectChanges();
    const buttons = debugElement.nativeElement.querySelectorAll('button');
    expect(buttons[1].classList).not.toContain('invisible');
  });

  it('should render name when selectedTimeframeIndex changes', () => {
    component.selectedTimeframeIndex = 1;
    fixture.detectChanges();
    const title = debugElement.nativeElement.querySelector('span.h4');
    expect(title.textContent).toContain(component.timeframeData[1].name);
  });

  it('click back button should set selectedTimeframeIndex - 1', () => {
    component.selectedTimeframeIndex = 2;
    const buttons = debugElement.nativeElement.querySelectorAll('button');
    buttons[0].dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(component.selectedTimeframeIndex).toBe(1);
  });

  it('click next button should set selectedTimeframeIndex + 1', () => {
    component.selectedTimeframeIndex = 2;
    const buttons = debugElement.nativeElement.querySelectorAll('button');
    buttons[1].dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(component.selectedTimeframeIndex).toBe(3);
  });
});
