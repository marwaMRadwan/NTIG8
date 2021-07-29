import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadreservationComponent } from './loadreservation.component';

describe('LoadreservationComponent', () => {
  let component: LoadreservationComponent;
  let fixture: ComponentFixture<LoadreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
