import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseShellComponent } from './reverse-shell.component';

describe('ReverseShellComponent', () => {
  let component: ReverseShellComponent;
  let fixture: ComponentFixture<ReverseShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverseShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
