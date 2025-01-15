import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlcIntroductionComponent } from './plc-introduction.component';

describe('PlcIntroductionComponent', () => {
  let component: PlcIntroductionComponent;
  let fixture: ComponentFixture<PlcIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlcIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlcIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
