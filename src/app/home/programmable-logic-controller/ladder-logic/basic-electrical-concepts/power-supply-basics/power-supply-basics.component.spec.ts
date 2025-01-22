import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupplyBasicsComponent } from './power-supply-basics.component';

describe('PowerSupplyBasicsComponent', () => {
  let component: PowerSupplyBasicsComponent;
  let fixture: ComponentFixture<PowerSupplyBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerSupplyBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerSupplyBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
