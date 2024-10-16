import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorCalculatorComponent } from './resistor-calculator.component';

describe('ResistorCalculatorComponent', () => {
  let component: ResistorCalculatorComponent;
  let fixture: ComponentFixture<ResistorCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistorCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistorCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
