import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCustomNodeTemplateChartComponent } from './app-custom-node-template-chart.component';

describe('AppCustomNodeTemplateChartComponent', () => {
  let component: AppCustomNodeTemplateChartComponent;
  let fixture: ComponentFixture<AppCustomNodeTemplateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCustomNodeTemplateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCustomNodeTemplateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
