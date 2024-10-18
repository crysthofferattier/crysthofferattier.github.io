import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelCircuitsComponent } from './parallel-circuits.component';

describe('ParallelCircuitsComponent', () => {
  let component: ParallelCircuitsComponent;
  let fixture: ComponentFixture<ParallelCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelCircuitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
