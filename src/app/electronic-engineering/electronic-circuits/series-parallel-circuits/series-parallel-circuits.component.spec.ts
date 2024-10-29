import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesParallelCircuitsComponent } from './series-parallel-circuits.component';

describe('SeriesParallelCircuitsComponent', () => {
  let component: SeriesParallelCircuitsComponent;
  let fixture: ComponentFixture<SeriesParallelCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesParallelCircuitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesParallelCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
