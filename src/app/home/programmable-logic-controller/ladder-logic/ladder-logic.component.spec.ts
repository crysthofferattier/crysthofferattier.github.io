import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderLogicComponent } from './ladder-logic.component';

describe('LadderLogicComponent', () => {
  let component: LadderLogicComponent;
  let fixture: ComponentFixture<LadderLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadderLogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadderLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
