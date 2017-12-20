import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedhorizontalBarChartComponent } from './groupedhorizontal-bar-chart.component';

describe('GroupedhorizontalBarChartComponent', () => {
  let component: GroupedhorizontalBarChartComponent;
  let fixture: ComponentFixture<GroupedhorizontalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedhorizontalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedhorizontalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
