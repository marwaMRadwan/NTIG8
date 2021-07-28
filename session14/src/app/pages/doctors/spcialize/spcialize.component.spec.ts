import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpcializeComponent } from './spcialize.component';

describe('SpcializeComponent', () => {
  let component: SpcializeComponent;
  let fixture: ComponentFixture<SpcializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpcializeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpcializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
