import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCompComponent } from './d-comp.component';

describe('DCompComponent', () => {
  let component: DCompComponent;
  let fixture: ComponentFixture<DCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
