import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCircuitsComponent } from './series-circuits.component';

describe('SeriesCircuitsComponent', () => {
  let component: SeriesCircuitsComponent;
  let fixture: ComponentFixture<SeriesCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCircuitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
