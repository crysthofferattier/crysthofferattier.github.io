import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicCircuitsComponent } from './electronic-circuits.component';

describe('ElectronicCircuitsComponent', () => {
  let component: ElectronicCircuitsComponent;
  let fixture: ComponentFixture<ElectronicCircuitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicCircuitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicCircuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
