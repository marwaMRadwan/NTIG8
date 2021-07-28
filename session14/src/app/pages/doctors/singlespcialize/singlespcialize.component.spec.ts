import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglespcializeComponent } from './singlespcialize.component';

describe('SinglespcializeComponent', () => {
  let component: SinglespcializeComponent;
  let fixture: ComponentFixture<SinglespcializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglespcializeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglespcializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
