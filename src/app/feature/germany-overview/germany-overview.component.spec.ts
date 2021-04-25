import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyOverviewComponent } from './germany-overview.component';

describe('OverviewComponent', () => {
  let component: GermanyOverviewComponent;
  let fixture: ComponentFixture<GermanyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GermanyOverviewComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
