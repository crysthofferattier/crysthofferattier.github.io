import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistanceComponent } from './resistance.component';

describe('ResistanceComponent', () => {
  let component: ResistanceComponent;
  let fixture: ComponentFixture<ResistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
