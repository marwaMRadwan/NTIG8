import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestudentComponent } from './singlestudent.component';

describe('SinglestudentComponent', () => {
  let component: SinglestudentComponent;
  let fixture: ComponentFixture<SinglestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
