import { Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement, inject } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarComponent } from './sidebar.component';

@Component({
  template: ''
})
class FakeComponent {}

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent, FakeComponent],
      imports: [RouterTestingModule],
      providers: []
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SidebarComponent);
        debugElement = fixture.debugElement;
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 1 route', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a.sidebar-link').length).toEqual(1);
  });

  it('href is overview', fakeAsync(() => {
    const firstLink = fixture.debugElement.query(By.css('a.sidebar-link'));
    expect(firstLink.nativeElement.getAttribute('href')).toEqual('/overview');
  }));
});
