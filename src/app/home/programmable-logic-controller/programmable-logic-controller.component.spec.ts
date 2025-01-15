import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammableLogicControllerComponent } from './programmable-logic-controller.component';

describe('ProgrammableLogicControllerComponent', () => {
  let component: ProgrammableLogicControllerComponent;
  let fixture: ComponentFixture<ProgrammableLogicControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammableLogicControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammableLogicControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
