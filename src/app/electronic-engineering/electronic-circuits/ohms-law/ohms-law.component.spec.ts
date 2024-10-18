import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhmsLawComponent } from './ohms-law.component';

describe('OhmsLawComponent', () => {
  let component: OhmsLawComponent;
  let fixture: ComponentFixture<OhmsLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OhmsLawComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OhmsLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
