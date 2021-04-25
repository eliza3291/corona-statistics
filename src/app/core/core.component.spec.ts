import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbComponent, SidebarComponent } from './components';

import { CoreComponent } from './core.component';

describe('CoreComponent', () => {
  let component: CoreComponent;
  let fixture: ComponentFixture<CoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoreComponent, SidebarComponent, BreadcrumbComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toogle expandLogo', () => {
    component.showMobileMenu = true;
    fixture.detectChanges();
    expect(component.showMobileMenu).toBe(true, 'showMobileMenu true');

    expect(component.expandLogo).toBe(false, 'collapsed sidebar at first');

    const leftSidebar = fixture.debugElement.query(By.css('aside.left-sidebar'));
    leftSidebar.triggerEventHandler('mouseover', {});

    expect(component.expandLogo).toBe(true, 'expanded sidebar');

    leftSidebar.triggerEventHandler('mouseout', {});

    expect(component.expandLogo).toBe(false, 'collapsed sidebar');
  });

  it('expandLogo toogle when showMobileMenu = true', () => {
    component.showMobileMenu = true;
    fixture.detectChanges();
    expect(component.showMobileMenu).toBe(true, 'showMobileMenu true');

    expect(component.expandLogo).toBe(false, 'collapsed sidebar at first');

    const leftSidebar = fixture.debugElement.query(By.css('aside.left-sidebar'));
    leftSidebar.triggerEventHandler('mouseover', {});

    expect(component.expandLogo).toBe(true, 'expanded sidebar');

    leftSidebar.triggerEventHandler('mouseout', {});

    expect(component.expandLogo).toBe(false, 'collapsed sidebar');
  });

  it('showMobileMenu should toogle when click on nav-toggler', () => {
    expect(component.showMobileMenu).toBe(false, 'showMobileMenu at first');

    const navToggler = fixture.debugElement.query(By.css('a.nav-toggler'));
    navToggler.triggerEventHandler('click', {});

    expect(component.showMobileMenu).toBe(true, 'showMobileMenu true');

    navToggler.triggerEventHandler('click', {});

    expect(component.showMobileMenu).toBe(false, 'showMobileMenu false');
  });
});
