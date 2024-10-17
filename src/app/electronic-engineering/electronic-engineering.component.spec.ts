import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicEngineeringComponent } from './electronic-engineering.component';

describe('ElectronicEngineeringComponent', () => {
  let component: ElectronicEngineeringComponent;
  let fixture: ComponentFixture<ElectronicEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectronicEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectronicEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
