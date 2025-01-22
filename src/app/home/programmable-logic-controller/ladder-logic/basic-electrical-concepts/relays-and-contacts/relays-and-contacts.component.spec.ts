import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaysAndContactsComponent } from './relays-and-contacts.component';

describe('RelaysAndContactsComponent', () => {
  let component: RelaysAndContactsComponent;
  let fixture: ComponentFixture<RelaysAndContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelaysAndContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaysAndContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
